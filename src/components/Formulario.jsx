import { useForm } from "react-hook-form";
import { simulation } from "../simulation";
import { useState } from "react";
import NotationMath from "../NotationMath";

const Formulario = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const [coment, setComent] = useState("");
    const [formData, setFormData] = useState({
        distance1: "",
        distance2: "",
        speed1: "",
        speed2: ""
    });

    const onSubmit = (data) => {
        const response = simulation(data.distance1, data.distance2, data.speed1, data.speed2);
        setComent(response);
        setFormData(data);
    };

    const handleReset = () => {
        reset();
        setComent("");
        setFormData({
            distance1: "",
            distance2: "",
            speed1: "",
            speed2: ""
        });
    };

    return (
        <div className="flex">
            <div className="w-screen h-screen flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-8 shadow-lg shadow-slate-500 px-4 py-6">
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
                {/* <div className="text-white text-lg w-[480px] h-40">
                    {coment}
                </div> */}
            </div>
            {(formData.distance1 && formData.distance2 && formData.speed1 && formData.speed2) && (
                <div className="w-screen flex justify-center">

                    <NotationMath
                        distance1={formData.distance1}
                        distance2={formData.distance2}
                        speedPlane1={formData.speed1}
                        speedPlane2={formData.speed2}
                    />
                </div>
            )}
        </div>
    );
}

export default Formulario;
