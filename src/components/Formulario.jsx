import { useForm } from "react-hook-form";
import { simulation } from "../simulation";
import { useState } from "react";

const Formulario = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const [coment, setComent] = useState("");

    const onSubmit = (data) => {
        console.log(data);
        const response = simulation(data.distance1, data.distance2, data.speed1, data.speed2);
        setComent(response);
    };

    const handleReset = () => {
        reset();
        setComent("");
    };

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-8 bg-black shadow-lg shadow-slate-500 px-4 py-6 mb-8">
                <div className="flex gap-14">
                    <div className="flex flex-col gap-3">
                        <label id="distance1" className="text-white text-lg font-bold">Distance 1</label>
                        <input type="number" id="distance1" placeholder="Distance 1" className="rounded-md px-2" {...register("distance1", { required: true })} />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label id="speed1" className="text-white text-lg font-bold">Speed 1</label>
                        <input type="number" id="speed1" placeholder="Speed 1" className="rounded-md px-2" {...register("speed1", { required: true })} />
                    </div>
                </div>

                <div className="flex gap-14">
                    <div className="flex flex-col gap-3">
                        <label id="distance2" className="text-white text-lg font-bold">Distance 2</label>
                        <input type="number" id="distance2" placeholder="Distance 2" className="rounded-md px-2" {...register("distance2", { required: true })} />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label id="speed2" className="text-white text-lg font-bold">Speed 2</label>
                        <input type="number" id="speed2" placeholder="Speed 1" className="rounded-md px-2" {...register("speed2", { required: true })} />
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-red-600/90 text-base font-bold px-4 py-1 rounded-md">
                    Simulate
                </button>

                <div className="flex w-full right-0 justify-end">
                    <button
                        type="button"
                        className="bg-green-500/90 text-base font-bold px-4 py-1 rounded-md"
                        onClick={handleReset}>
                        Reset
                    </button>
                </div>
            </form>
            <p className="text-white text-lg w-[480px] h-40">
                {coment}
            </p>
        </div>
    )
}

export default Formulario