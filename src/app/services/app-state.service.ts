import { Injectable, signal } from '@angular/core';
import { Tour, TOURS } from '../data/mock-data';

export type Screen    = 'login' | 'dashboard' | 'tour-detail' | 'itinerary';
export type ViewMode  = 'mobile' | 'desktop';

@Injectable({ providedIn: 'root' })
export class AppStateService {
  readonly screen       = signal<Screen>('login');
  readonly viewMode     = signal<ViewMode>('mobile');
  readonly selectedTour = signal<Tour | null>(null);
  readonly selectedDay  = signal<number>(0);
  readonly showNotify   = signal<boolean>(false);

  readonly tours = TOURS;

  get tourStats() {
    return {
      total:      this.tours.length,
      activos:    this.tours.filter(t => t.estado === 'activo').length,
      alumnos:    this.tours.reduce((s, t) => s + t.alumnos, 0),
      pendientes: this.tours.flatMap(t => t.documentos).filter(d => d.estado === 'warning').length,
    };
  }

  navigate(screen: Screen)      { this.screen.set(screen); }
  setDay(day: number)           { this.selectedDay.set(day); }
  notify()                      { this.showNotify.set(true); }
  closeNotify()                 { this.showNotify.set(false); }

  selectTour(tour: Tour): void {
    this.selectedTour.set(tour);
    this.selectedDay.set(0);
    this.navigate('tour-detail');
  }

  openItinerary(): void { this.navigate('itinerary'); }

  toggleViewMode(): void {
    this.viewMode.update(v => v === 'mobile' ? 'desktop' : 'mobile');
  }

  logout(): void {
    this.selectedTour.set(null);
    this.navigate('login');
  }
}
