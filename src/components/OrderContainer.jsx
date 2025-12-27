import React, { useEffect, useState } from 'react';
import States from './States';
import TicketCard from './cards/ticketCard';
import TaskCard from './cards/TaskCard';

const OrderContainer = ({ promise }) => {
  const [ticket, setTicket] = useState([]);
  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    promise.then(data => setTicket(data));
  }, [promise]);

  const handleTask = (ticket) => {
    const exists = taskItems.find(item => item.id === ticket.id);
    if (!exists) {
      setTaskItems([...taskItems, ticket]);
    }
  };
  const handleResolved = (id) =>{
    setTaskItems(taskItems.map(item=>item.id === id ? {...item, status: "resolved"}:item)
)
  }

  return (
    <div>
      <States
        taskTotal={taskItems.length}
        ticketTotal={ticket.length}
      />

      <section className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-13 gap-5">
        
        {/* LEFT */}
        <div className="lg:col-span-10">
          <h5 className="font-bold text-4xl mb-6">Customer Tickets</h5>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ticket.map(item => (
              <TicketCard
                key={item.id}
                ticket={item}
                handleTask={handleTask}
              />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-3 space-y-5">
          <h2 className="font-bold text-4xl">Task Status</h2>

          <div className="shadow p-5 space-y-4">
          {taskItems 
          .filter(item => item.status !== "resolved") 
          .map(item => (
         <TaskCard key={item.id} item={item} handleResolve={handleResolved} />
         ))}
         </div>


         <h2 className="font-bold text-4xl">Resolved Task</h2>

<div className="shadow p-5 space-y-3">
  {taskItems.filter(item => item.status === "resolved").length === 0 ? (
    <p className="text-gray-400">No resolved tasks yet</p>
  ) : (
    taskItems
      .filter(item => item.status === "resolved")
      .map(item => (
        <div
          key={item.id}
          className="p-2 bg-green-100 rounded text-sm"
        >
          {item.title}
        </div>
      ))
  )}
</div>



        </div>
      </section>
    </div>
  );
};

export default OrderContainer;
