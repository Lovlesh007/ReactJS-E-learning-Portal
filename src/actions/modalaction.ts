export const SHOW_MODAL: string = "SHOW_MODAL";
export const HIDE_MODAL: string = "HIDE_MODAL";

//SHow Modal on Click Action
export const showModal = (data: any) => {
  return {
    type: "SHOW_MODAL",
    payload: data,
  };
};
//Hide Modal on Click Action
export const hideModal = () => {
  return {
    type: "HIDE_MODAL",
  };
};
