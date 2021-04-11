import { getAllEvents } from '../../dummy-data';
import {useRouter} from 'next/router';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/Events-Search';


const EventsPage = () => {
    const router= useRouter();
    const events = getAllEvents();

    const findEventsHandler=(year,month)=>{
        const fullPath=`/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <div>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items={events} />
        </div>
    )
}

export default EventsPage;