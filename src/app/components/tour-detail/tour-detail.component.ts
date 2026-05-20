import { Component, inject } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';
import { TourEstado } from '../../data/mock-data';

@Component({
  selector: 'app-tour-detail',
  standalone: true,
  templateUrl: './tour-detail.component.html',
})
export class TourDetailComponent {
  state = inject(AppStateService);

  get tour() { return this.state.selectedTour()!; }

  badgeCls(e: TourEstado): string {
    return { activo:'bg-emerald-100 text-emerald-700 border-emerald-200',
             planificado:'bg-amber-100 text-amber-700 border-amber-200',
             completado:'bg-slate-100 text-slate-500 border-slate-200' }[e];
  }
  badgeLabel(e: TourEstado): string {
    return { activo:'Activo', planificado:'Planificado', completado:'Completado' }[e];
  }
}
