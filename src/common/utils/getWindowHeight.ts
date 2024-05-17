const WINDOW_MAX_HEIGHT = 620;
const WINDOW_MIN_HEIGHT = 60;
const PRE_ITEM_HEIGHT = 70;
const HISTORY_HEIGHT = 70;
const ROW_ITEM_NUM = 8;

export default (searchList: Array<any>, historyList): number => {
  const defaultHeight = historyList.length ? Math.ceil(historyList.length / ROW_ITEM_NUM) * HISTORY_HEIGHT : 0;

  if (!searchList) return WINDOW_MAX_HEIGHT + defaultHeight;
  if (!searchList.length) return WINDOW_MIN_HEIGHT + defaultHeight;
  return searchList.length * PRE_ITEM_HEIGHT + WINDOW_MIN_HEIGHT >
    WINDOW_MAX_HEIGHT
    ? WINDOW_MAX_HEIGHT
    : searchList.length * PRE_ITEM_HEIGHT + WINDOW_MIN_HEIGHT;
};
