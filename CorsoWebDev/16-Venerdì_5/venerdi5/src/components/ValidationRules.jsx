import { useForm } from 'react-hook-form';

export function ValidationRules() {
    const { register, handleSubmit } = useForm();

return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
        <input {...register("username", {
            required: "Il nome utente è richiesto",
            minLength: {
                value: 4,
                message: "Il nome deve contenere almeno 4 caratteri"
            }
        })} />
        <button type="submit">Invia</button>
    </form>
);
}
