import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { EventInput } from '@fullcalendar/core/structs/event';
import locale from '@fullcalendar/core/locales/pt-br';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'calendario';
    calendarPlugins = [dayGridPlugin, timeGrigPlugin, bootstrapPlugin];
    events: EventInput[] = [
        { title: 'Evento 1', date: new Date('2019-11-01T14:00:00'), allDay: false },
        { title: 'Evento 2', date: new Date(), allDay: true }
    ];
    locale = locale;
    headerDefault = {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridDay,timeGridWeek,dayGridMonth'
    };
    header: any = this.headerDefault;

    toogleHeader(): void {
        if (this.header) {
            this.header = false;
        } else {
            this.header = this.headerDefault;
        }
    }
}
