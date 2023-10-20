import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Dashboard({ auth ,todos}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Todos</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {(todos.length ==0) ? (<div><p>No todos available</p></div>) :
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
                        </ul>)}

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
