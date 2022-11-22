export const cardCount = (id, state) =>
  state?.find((item) => item.id === id);

export const cardQty = (data) => {
  let qty = 0;
  data.map((item) => {
    qty = qty + item.qty;
  });
  return qty;
};
