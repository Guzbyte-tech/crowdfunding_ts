import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("CrowdfundingModule", (m) => {
  const Crowdfunding = m.contract("Crowdfunding", [], {});

  return { Crowdfunding };
});
