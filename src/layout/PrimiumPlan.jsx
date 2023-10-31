import PlanCard from "../components/PlanCard";


const PrimiumPlan = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-bold">Premium <span className="text-4xl text-blue-600 md:text-6xl">Plane</span></h1>
            <hr />

            <div className="p-3">
                <PlanCard></PlanCard>
            </div>

            </div>


        </div>
    );
};

export default PrimiumPlan;