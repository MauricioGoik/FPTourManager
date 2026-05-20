import { Component, inject } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-itinerary',
  standalone: true,
  templateUrl: './itinerary.component.html',
})
export class ItineraryComponent {
  state = inject(AppStateService);

  get tour()    { return this.state.selectedTour()!; }
  get day()     { return this.state.selectedDay(); }
  get current() { return this.tour.itinerario[this.day]; }
}
