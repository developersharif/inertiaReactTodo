import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Index from './Todo/Index';

export default function Dashboard({ auth ,todos}) {
    return (
        <AuthenticatedLayout
            user={auth.user}

        >
            <Head title="Dashboard" />


                        {/* {(todos.length ==0) ? (<div><p>No todos available</p></div>) :
                       ( <ul>
                        {todos && todos.map((todo) => (
                            <div className='flex justify-between p-5' key={todo.id}>
                                <li>{todo.title}
        <hr />
        {todo.description}
        </li>
        <span>
        <Link href={`/todo/${todo.id}`} as="button" type="button" className='m-2'>Edit</Link>

        <Link href={`/todo/${todo.id}`} method="delete" as="button" type="button">Delete</Link>
        </span>
                            </div>
      ))}
                        </ul>)} */}
                        <Index todos={todos} auth={auth} />


        </AuthenticatedLayout>
    );
}
