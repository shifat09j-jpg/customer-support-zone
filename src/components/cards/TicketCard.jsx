import { CalendarDays } from "lucide-react";

const TicketCard = ({ticket, handleTask}) => {
//   const ticket = {
//     id: 1001,
//     title: "Login Issues - Can't Access Account",
//     description:
//       "Customer is unable to log in to their account. They've tried resetting their password multiple times but still cannot access the account.",
//     customer: "John Smith",
//     priority: "High",
//     status: "Open",
//     createdAt: "2024-01-15",
//   };

  return (
    <div onClick={() => handleTask(ticket)} className="p-4 rounded-xl border bg-white space-y-3">

      {/* Title + Status */}
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold">{ticket.title}</h3>

        <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600">
          {ticket.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500">
        {ticket.description}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs text-gray-400">
        <div>
          <span className="font-medium">#{ticket.id}</span>{" "}
          <span className="ml-2 text-red-500">
            {ticket.priority.toUpperCase()} PRIORITY
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span>{ticket.customer}</span>
          <CalendarDays size={14} />
          <span>{ticket.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
