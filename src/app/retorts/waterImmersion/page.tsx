import SideBarLayout from "@/components/layout/SideBarLayout";
import WaterImmersionFlowChartMobile from "@/components/flowcharts/WaterImmersionFlowChartMobile";
import WaterImmersionFlowChart from "@/components/flowcharts/WaterImmersionFlowChart";
export default function WaterImmersion() {
  return (
    <SideBarLayout>
      <section className="max-w-3xl mx-auto py-16 px-4 pt-36 text-blue-gray-700">
        <h1 className="text-4xl font-bold mb-8 text-blu-1">Water Immersion Retort</h1>
        <p className="mb-6 text-lg ">
        The Water Immersion Retort uses preheated water from a top storage tank to rapidly flood the sterilization chamber, ensuring quick and uniform heat transfer. Continuous high-flow water circulation guarantees even temperature distribution, consistent sterilization results, and reduced processing time — all while minimizing energy and water losses.
        <br/>
        <br/>
        A wide range of food products, especially those that benefit from immersive heating, rapid processing, and uniform thermal treatment — including products like sauces, gravies, and braised foods.

        </p>
        <div className="hidden md:block">
          <WaterImmersionFlowChart />
        </div>
        <div className="block md:hidden">
          <WaterImmersionFlowChartMobile />
        </div>

        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-blu-1">Key Advantages</h2>
          <ul className="list-disc pl-8 space-y-4 text-lg">
            <li>
              <span className="font-semibold">Rapid Heat Penetration</span>
              <br />
              Accelerates come-up time and shortens total process duration
            </li>
            <li>
              <span className="font-semibold">Uniform Temperature Distribution</span>
              <br />
              
Ensures thermal consistency across all products and zones.
            </li>
            <li>
              <span className="font-semibold">Energy & Water Efficient</span>
              <br />
              
Smart design minimizes heat loss, water use, and operating costs.
            </li>
            <li>
              <span className="font-semibold">Superior Product Quality
              </span>
              <br />
              Gentle handling preserves texture, flavor, and color.
            </li>
          </ul>
        </div>
      </section>
    </SideBarLayout>
  );
}
