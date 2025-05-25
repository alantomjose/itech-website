import SideBarLayout from "@/components/layout/SideBarLayout";
import SteamWaterSprayFlowChart from "@/components/SteamWaterSprayFlowChart";

export default function SteamWaterSpray() {
  return (
    <SideBarLayout>
      <section className="max-w-3xl mx-auto py-16 px-4 pt-36 text-blue-gray-700">
        <h1 className="text-4xl font-bold mb-8 text-blu-1">Steam Water Spray Retort</h1>
        <p className="mb-6 text-lg ">
          Our Steam Water Spray (SWS) Retort delivers precise thermal sterilization using a combination of direct steam
          injection and superheated water spray. With steam rising from the base and fine water sprays from the top and
          sides, the process ensures uniform heat distribution, faster come-up times, and consistent product
          safety—batch after batch.
        </p>
        <SteamWaterSprayFlowChart />

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-blu-1">Best Suited For</h2>
          <p className="mb-6 text-lg ">
            The SWS retort is ideal for rigid and semi-rigid containers that require overpressure during processing to
            prevent deformation:
          </p>
          <ul className="list-disc pl-8 space-y-4 text-lg">
            <li>Flexible pouches (retort pouches)</li>
            <li>Plastic trays (CPET, PP)</li>
            <li>Glass Bottles</li>
            <li>Plastic Bottles</li>
            <li>Metal Cans</li>
          </ul>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-blu-1">Key Advantages</h2>
          <ul className="list-disc pl-8 space-y-4 text-lg">
            <li>
              <span className="font-semibold">Fast and Uniform Heat Transfer</span>
              <br />
              Direct steam + multidirectional water spray = shorter come-up and sterilization times.
            </li>
            <li>
              <span className="font-semibold">Container Safety</span>
              <br />
              Compressed air injection maintains overpressure to counteract internal package expansion, minimizing risk
              of deformation.
            </li>
            <li>
              <span className="font-semibold">Energy and Water Efficiency</span>
              <br />
              Integrated plate heat exchanger allows for closed-loop water cooling and reuse, reducing utility costs.
            </li>
            <li>
              <span className="font-semibold">Excellent Process Control</span>
              <br />
              Real-time monitoring of temperature, flow, pressure, and rotation (if rotary) ensures regulatory
              compliance and product safety.
            </li>
          </ul>
        </div>
      </section>
    </SideBarLayout>
  );
}
