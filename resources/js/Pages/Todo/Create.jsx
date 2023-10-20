import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
function Create({auth}) {
    const {data, setData, post,reset, setDefaults,processing, errors} = useForm({
        title:'',
        description:''
    });
    function handleSubmit(e){
        e.preventDefault();
        post("/todo",{
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => reset(),
          });
    }
    return (
        <AuthenticatedLayout user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Todo Create</h2>}>
           <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form className='flex flex-col items-center justify-center m-4' onSubmit={handleSubmit}>
                            <div className='container w-[70%]'>
                                <InputLabel htmlFor="title" value="Title"></InputLabel>
                                <TextInput
                        id="title"
                        type="title"
                        name="title"
                        placeholder="Title"
                        className="mt-1 block w-full p-2"
                        value={data.title}
                        onChange={e => setData('title', e.target.value)}
                        isFocused={true} />
                        <InputError message={errors.title} className="mt-2" />
                            </div>
                            <div className='container w-[70%]'>
                                <InputLabel htmlFor="description" value="Description"></InputLabel>
                                <TextInput
                        id="description"
                        type="description"
                        name="description"
                        placeholder="Description"
                        className="mt-1 block w-full p-2"
                        value={data.description}
                        onChange={e => setData('description', e.target.value)}
                        />
                        <InputError message={errors.description} className="mt-2" />
                            </div>
                            <PrimaryButton disabled={processing}>Submit</PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
     );
}

export default Create;
