//Write your code here
const attendee = {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
};

const logAttendeeName=(attend)=>{
   console.log(attend['name'])
}
function logTicketPrice(attendObj){
   console.log(attendObj.ticketPrice)
}

const updateTicketType=(wholeObj, ticket)=>{
   wholeObj.ticketType = ticket
   return wholeObj

}

const updateTicketPrice=(attendee, newPrice)=>{
   attendee.ticketPrice= newPrice
   return attendee
}

const removeEventProperty =(attendee)=>{
    delete attendee.event
    return attendee
}

function addCheckedInProperty(attendee){
    return attendee.checkedIn= true
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};