# 【行動技術】前端工程師 - 面試前繳交

> 此面試題目由 ezTravel易遊網 提供，僅限應徵者本人於此次面試過程中使用，請勿以任何形式轉發、公開、分享或用於其他用途。感謝您的理解與配合！

## 任務概述

- 這份題目的目標是使用 React 和 CSS 製作一個符合設計要求的手機畫面。
- 在繳交後我們會根據繳交內容進行評估，以及可能會在面試時進行討論。
- 如果撰寫過程中有任何疑問或是想說明或者討論的話，可以用註解在行內說明。

## 需求

1. **畫面呈現**  
   - 根據 `./public/doc/example.png` 圖檔製作一個元件，修改 `./src/App.js` 放入元件，呈現在畫面中的白色區域內。
   - 白色區域(`Canvas`)是一個可變寬度的畫框，元件必須被放置在畫框中，並且是個響應式元件(responsive component)
   - 超出可視範圍的部分需可滾動

2. **資料來源**  
   - 畫面顯示用的資料放在 `./src/data.json` 文件中，你需要從這個 JSON 檔案中讀取資料並顯示在畫面上。
   - 這份資料的內容會和 example.png 中呈現的不盡相同

3. **圖片處理**  
   - 所有圖片需要保持適當的寬高比，並且是響應式(responsive component)
   - 大格的圖片比例為 2.5:1
   - 小格的圖片比例為 4:3
   - 載入圖片應滿版置中，不合比例的部分裁切。
   - 如果圖片載入失敗，應顯示一張預設的佔位圖 `./assets/pic-fault.svg`。

4. **設計規範**  
   - 設計圖中的間距要求會在 `./public/doc/design-spec.png` 中標註。
   - 圖上標注 pt 視為 px。
   - 如果畫面上沒有標註具體的間距，依比例自行推算決定即可。
   - 不需要做到 pixel perfact，只須保持畫面比例關係。

5. **設計圖上的字型尺寸**
   - font-family: -apple-system, BlinkMacSystemFont, "PingFang TC", "Segoe UI", Roboto, sans-serif;
   - default size: 12px
   - title size: 18px
   - item title size: 14px
   - price size: 16px

6. **這個元件需要用到的顏色**
   - border-grey = #e3e3e3
   - font-black = #222222
   - font-grey = #666666 
   - backgournd-grey = #dfdfdf
   - backgournd-green = #11d073
   - price-orange = #ff8b00

## Dos and Don'ts

- ✅ 可以自由加入 dependency
- ✅ 可以自行調整目錄結構
- ⛔ 不要修改 data.json 的結構及內容：這個文件結構是固定的，不應進行任何更動。對資料的處理應該依照原始結構進行。
- ⛔ 不要修改 Canvas.js 和 canvas.css：這是你的畫布，用來框住你做的元件。
- ⛔ 避免過度調整畫面細節：這份題目的目標是實現畫面上的比例和大致布局，並非每個像素都要求精確對齊。

## 繳交方式

- 根據這個模板完成需求。
- 直接編輯並儲存就會自動fork，可留意網址會變為 2025-interview-`forked`-`{random-hash}`。
- 利用 `Share` 功能以 `Unlisted` 方式取得分享連結回傳給我們。