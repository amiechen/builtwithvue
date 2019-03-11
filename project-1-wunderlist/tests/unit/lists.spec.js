import { expect } from "chai";
import { mount } from "@vue/test-utils";
import Lists from "@/components/Lists.vue";

describe("Lists.vue", () => {
  it("does not render modal by default", () => {
    const wrapper = mount(Lists);
    expect(wrapper.find("#test-modal").exists()).to.be.false;
  });
  it("renders modal when user clicks on the create button", () => {
    const wrapper = mount(Lists);
    const createListBtn = wrapper.find("#test-create-list");
    createListBtn.trigger("click");
    expect(wrapper.find("#test-modal").isVisible()).to.be.true;
  });
  it("displays a correct list name", () => {
    const wrapper = mount(Lists);
    const listNames = wrapper.find(".test-list-name");
    expect(listNames.text()).to.equal("grocery");
  });
  it("renders correct number of incompleted todos on the list", () => {
    const wrapper = mount(Lists);
    const listCount = wrapper.find(".test-list-count");
    expect(listCount.text()).to.equal("2");
  });
});
