// ============================================================
// 台灣機場貨運量儀表板｜資料來源設定
// 上傳各 xlsx 到 Google Drive 後，將對應 Spreadsheet ID 填入此處。
// 此檔案是唯一需要修改的設定，HTML 邏輯不動。
// ============================================================

const SHEETS = {
  // 表4_機場年報合併_20260625
  annual:      '1B7lUo_qZWI4ZlJsCOHtdsjSbOxE1tPDYz6a00ZbEtD0',
  // 表4_月報長格式112-115_機場貨量及貨運站總表_20260625
  monthly:     '1hYj6Pp6atThHJNxVlQKILJl3-z6YhuVOszbTlCTe3uw',
  // 表12_年份合計104~114_桃機進口貨物類別與國家_20260625
  imp_annual:  '1OFq-YuixznUiInh7D8jAtwE9aeSBpq7vJ3bc6PHeA-4',
  // 表12_月報長格式112-115_桃機進口貨物類別與國家_20260625
  imp_monthly: '16KQZr1xZxTGSFxtOE-1NpBHLY_A1JAe076BkkzqZAw8',
  // 表13_年份合計104~114_桃機出口貨物類別與國家_20260625
  exp_annual:  '12WfP624uM4B-BfK1XRK7ahOUQtcF8uYfYHcCmAbKgYA',
  // 表13_月報長格式112-115_桃機出口貨物類別與國家_20260625
  exp_monthly: '1v47eCN0cUFSggi5r9Fl0xh9UvehUXE0lcKedk5K8Q_c',
  // 表17_年份合計104~114_國籍航空公司貨量_20260625
  al_annual:   '1WTUvuANxc5dn5F93sR2-Bbt0BuQzap3Vo9qbTvlTrUo',
  // 表17_月報長格式112-115_國籍航空公司貨量_20260625
  al_monthly:  '18R1zb4CNNcYdgGwCxX-Q7IeQHURpUbnOwMa-CrQVXtM',
  // 自貿統計_長格式_桃園空港_貿易量_貨品與國家_20260625
  ftz_vol:     '1iv1WWwCxQHPhFt-dmN2TR9i_SzRIr60emRP5dW86fAc',
  // 自貿統計_長格式_桃園空港_貿易值_貨品與國家_20260625
  ftz_val:     '1qZOo61gAZRMVJ8xnAALTdAXnRzQ0Fi4Kz5HmdS5NXIE',
  // 自貿統計_長格式_桃園空港_貿易量與值_20260625
  ftz_sum:     '1ZxBesuLuVB3iKp_kife0UK2U-Y9GmmmaDECumWjzpeI',
};

const CONFIG = {
  LATEST_YEAR: 2025,
  BASE_YEAR: 2015,
  FTZ_BASE_YEAR: 2011,
};
