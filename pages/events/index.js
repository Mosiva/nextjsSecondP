import React from "react";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";

export default function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}
