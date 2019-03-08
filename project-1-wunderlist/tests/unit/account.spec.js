import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Account from "@/components/Account.vue";

describe("Account.vue", () => {
  it("contains user email", () => {
    const wrapper = shallowMount(Account);
    expect(wrapper.find("label").text()).to.equal("sallycantdance@gmail.com");
  });
});
