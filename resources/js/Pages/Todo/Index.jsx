import BGSVG from "@/Assets/svg/bg.svg"
import TopImg from "@/Assets/svg/tasklist.svg"
import Modal from "@/Components/Modal";
import { useState } from "react";
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, useForm } from '@inertiajs/react';
function Index({todos}) {
    let [isOpen, setIsOpen] = useState(false)
    const bgSyle = {
        backgroundImage:`url(${BGSVG})`,
        backgroundSize:'cover',
        backgroundAttachment:'fixed',
    }
    const modalClose = ()=>{
        setIsOpen(false)
    }
    const {data, setData, post,reset, clearErrors,setDefaults,processing, errors} = useForm({
        title:'',
        description:''
    });
    function handleSubmit(e){
        e.preventDefault();
        post("/todo",{
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setIsOpen(false)
                reset()
            },
          });
    }
    let completed = todos.filter((item)=>{
       return item.status=='completed'
    });
    let pending = todos.filter((item)=>{
        return item.status=='pending'
     });

    return (<>

    <div style={bgSyle}>
<div className="h-full">
      <div className="md:w-[60%] m-auto  pt-4">
        <img src={TopImg} alt=""className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"/>
        <div className="bg-white shadow-2xl rounded-b-3xl">
          <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">To-do List</h2>
          <div className="w-5/6 m-auto">
            <p className="text-center text-gray-500 pt-5">{todos.length} Total, {completed.length} Completed, {pending.length} Pending
</p>
          </div>
          <div className="bg-blue-700 w-52 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700" onClick={()=>setIsOpen(true)}>
            <button classNames="lg:text-sm text-lg font-bold">Add To-Do</button>
          </div>
          <div className="grid  w-full lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
            <div className="">
            <div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
      {(todos.length ==0) ? (<div><p>No todos available</p></div>) : (
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:block">Num</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Task</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Status</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase hidden md:block">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {todos && todos.map((todo,index) => (

            <tr key={todo.id}>
              <td className="px-4  whitespace-nowrap text-sm font-medium hidden md:block">{index+1}</td>
              <td className="px-4  whitespace-nowrap text-sm ">{todo.title}</td>
              <td className="px-4  whitespace-nowrap text-sm ">{new Date(todo.created_at).toLocaleDateString()}</td>
              <td className="px-4  whitespace-nowrap text-right text-sm font-medium">
                <Link replace preserveScroll href="/update-todo-status" method="post" data={{id:todo.id}}> <input type="checkbox" checked={(todo.status!="pending") ? true : false} /></Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium hidden md:block">
              <Link href={`/todo/${todo.id}`} as="button" type="button" className='m-2'>Edit</Link>
              <Link href={`/todo/${todo.id}`} method="delete" as="button" type="button">Delete</Link>
              </td>
            </tr>
          ))}
          </tbody>
        </table>

      )}
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
        {/* modal  */}
        <Modal show={isOpen}>
        <form class="w-[90%] p-6" onSubmit={handleSubmit}>
  <div class="flex items-center border-b border-teal-500 py-2">
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Task..." aria-label="task" value={data.title} onChange={e => setData('title', e.target.value)}
                        isFocused={true}/>

    <PrimaryButton disabled={processing}>Submit</PrimaryButton>
    <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button" onClick={() => {
  modalClose();
  clearErrors();
}}>
      Cancel
    </button>

  </div>
  <InputError message={errors.title} classNameName="pt-4" />
</form>

        </Modal>
    </>  );
}

export default Index;
