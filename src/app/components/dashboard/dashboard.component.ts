import { Component, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { Tour, TourEstado } from '../../data/mock-data';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  state = inject(AppStateService);

  get toursActivos()     { return this.state.tours.filter(t => t.estado === 'activo'); }
  get toursPlanificados(){ return this.state.tours.filter(t => t.estado === 'planificado'); }
  get toursCompletados() { return this.state.tours.filter(t => t.estado === 'completado'); }

  selectTour(tour: Tour)   { this.state.selectTour(tour); }
  logout()                 { this.state.logout(); }
  hasWarning(t: Tour)      { return t.documentos.some(d => d.estado === 'warning'); }

  badgeCls(e: TourEstado): string {
    return { activo:'bg-emerald-100 text-emerald-700 border-emerald-200',
             planificado:'bg-amber-100 text-amber-700 border-amber-200',
             completado:'bg-slate-100 text-slate-500 border-slate-200' }[e];
  }
  badgeLabel(e: TourEstado): string {
    return { activo:'Activo', planificado:'Planificado', completado:'Completado' }[e];
  }
}
