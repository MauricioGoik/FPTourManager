import { Component, inject } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-notify-modal',
  standalone: true,
  template: `
<div class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6">
  <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl anim-modal">
    <div class="text-center">

      <div class="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-emerald-100">
        <span class="text-4xl">✅</span>
      </div>

      <h3 class="text-xl font-black text-slate-800">¡Notificación enviada!</h3>
      <p class="text-slate-500 text-sm mt-2 leading-relaxed">
        Se ha notificado a
        <strong class="text-blue-600">{{ state.selectedTour()?.alumnos }}</strong> alumnos
        y <strong class="text-blue-600">{{ state.selectedTour()?.profesores?.length }}</strong> profesores
        sobre el cambio de horario.
      </p>

      <div class="bg-slate-50 rounded-2xl p-4 mt-4 text-left text-xs text-slate-600 space-y-1 border border-slate-100">
        <p class="font-bold text-slate-700 mb-2">📧 Enviado vía:</p>
        <p>• Email corporativo del centro</p>
        <p>• SMS a tutores legales</p>
        <p>• Notificación push en la app</p>
        <p class="mt-2 pt-2 border-t border-slate-200 text-slate-400">
          Enviado a las <span class="font-medium text-slate-500">{{ time }}</span>
        </p>
      </div>

      <button (click)="state.closeNotify()"
        class="mt-5 w-full bg-blue-600 text-white py-3.5 rounded-xl font-black text-sm
               hover:bg-blue-700 active:scale-95 transition-all">
        Entendido
      </button>
    </div>
  </div>
</div>
  `,
})
export class NotifyModalComponent {
  state = inject(AppStateService);
  time  = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
        + ' · '
        + new Date().toLocaleDateString('es-ES', { day:'numeric', month:'long', year:'numeric' });
}
