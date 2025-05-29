import SideBarLayout from "@/components/layout/SideBarLayout";
import SteamWaterSprayFlowChart from "@/components/flowcharts/SteamWaterSprayFlowChart";
import SteamWaterSprayFlowChartMobile from "@/components/flowcharts/SteamWaterSprayFlowChartMobile";
import WaterCascadeFlowChart from "@/components/flowcharts/WaterCascadeFlowChart";
import WaterCascadeFlowChartMobile from "@/components/flowcharts/WaterCascadeFlowChartMobile";
export default function SteamWaterSpray() {
  return (
    <SideBarLayout>
      <section className="max-w-3xl mx-auto py-16 px-4 pt-36 text-blue-gray-700">
        <h1 className="text-4xl font-bold mb-8 text-blu-1">Water Cascading Retort</h1>
        <p className="mb-6 text-lg ">
          The Water Cascade Retort—also known as a water shower or raining retort—uses a continuous top-down flow of
          heated water to sterilize products with precision and uniformity. This system delivers process water from the
          top over a full load of baskets, ensuring even temperature distribution while keeping containers stable and
          protected.
          <br />
          <br />
          Ideal for heat-processing applications that demand both thermal uniformity and gentle container handling.
        </p>
        <div className="hidden md:block">
          <WaterCascadeFlowChart />
        </div>
        <div className="block md:hidden">
          <WaterCascadeFlowChartMobile />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-blu-1">Key Features & Benefits</h2>
          <ul className="list-disc pl-8 space-y-4 text-lg">
            <li>
              <span className="font-semibold">Uniform Top-to-Bottom Heat Transfer</span>
              <br />
              Precision perforated plate ensures even shower distribution.
            </li>
            <li>
              <span className="font-semibold">Low Water Level, High Efficiency</span>
              <br />
              Water level stays below product load, reducing volume and saving energy.
            </li>
            <li>
              <span className="font-semibold">Gentle Container Handling</span>
              <br />
              Ideal for breakable and rigid containers, with minimal impact forces.
            </li>
            <li>
              <span className="font-semibold">External Heat Exchange</span>
              <br />
              Prevents fouling, simplifies maintenance, and improves temperature control.
            </li>
            <li>
              <span className="font-semibold">Validated Thermal Consistency</span>
              <br />
              Designed for repeatable, regulation-compliant results across all zones.
            </li>
          </ul>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-blu-1">Best Suited For</h2>
          <p className="text-lg">
            Perfect for glass jars, glass bottles, metal cans, and other rigid containers that require reliable and uniform heat distribution without full water immersion.
          </p>
        </div>
      </section>
    </SideBarLayout>
  );
}
