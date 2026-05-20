import { Component, inject } from '@angular/core';
import { AppStateService } from './services/app-state.service';
import { Tour, TourEstado } from './data/mock-data';
import { LoginComponent }      from './components/login/login.component';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { TourDetailComponent } from './components/tour-detail/tour-detail.component';
import { ItineraryComponent }  from './components/itinerary/itinerary.component';
import { NotifyModalComponent }from './components/notify-modal/notify-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, DashboardComponent, TourDetailComponent, ItineraryComponent, NotifyModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  state = inject(AppStateService);

  get toursActivos()      { return this.state.tours.filter(t => t.estado === 'activo'); }
  get toursPlanificados() { return this.state.tours.filter(t => t.estado === 'planificado'); }
  get toursCompletados()  { return this.state.tours.filter(t => t.estado === 'completado'); }

  badgeCls(e: TourEstado): string {
    return { activo:'bg-emerald-100 text-emerald-700', planificado:'bg-amber-100 text-amber-700',
             completado:'bg-slate-100 text-slate-500' }[e];
  }
  badgeLabel(e: TourEstado): string {
    return { activo:'Activo', planificado:'Planificado', completado:'Completado' }[e];
  }
  isSelected(t: Tour): boolean {
    return this.state.selectedTour()?.id === t.id;
  }
  hasWarning(t: Tour): boolean {
    return t.documentos.some(d => d.estado === 'warning');
  }
}
