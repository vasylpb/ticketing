import { ExpirationCompleteEvent, Publisher, Subjects } from "@sgtickets/common";


export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}