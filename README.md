# Peddi-Dose: Pediatric Dose Calculator (โปรแกรมคำนวณขนาดยาเด็ก)

<p align="center">
  <strong>เครื่องมือคำนวณขนาดยาในเด็กสำหรับบุคลากรทางการแพทย์</strong>
  <br />
  <a href="https://pedi-dose-c9cec.web.app/"><strong>ลองใช้งาน (Live Demo) »</strong></a>
</p>

<p align="center">
    <a href="https://github.com/suradet-ps/peddi-dose/blob/main/LICENSE">
        <img src="https://img.shields.io/github/license/suradet-ps/peddi-dose?style=for-the-badge" alt="License">
    </a>
    <a href="https://github.com/suradet-ps/peddi-dose/issues">
        <img src="https://img.shields.io/github/issues/suradet-ps/peddi-dose?style=for-the-badge" alt="Issues">
    </a>
    <img src="https://img.shields.io/github/stars/suradet-ps/peddi-dose?style=for-the-badge" alt="Stars">
    <img src="https://img.shields.io/badge/package_manager-bun-f9f1e1?style=for-the-badge&logo=bun" alt="Bun">
</p>

---

**Peddi-Dose** เป็นเว็บแอปพลิเคชันที่ออกแบบมาเพื่อช่วยเภสัชกร, แพทย์, และบุคลากรทางการแพทย์ในการคำนวณขนาดยาสำหรับผู้ป่วยเด็กอย่างรวดเร็วและแม่นยำ โดยอ้างอิงจากน้ำหนักตัวของผู้ป่วย โปรแกรมจะแสดงผลลัพธ์ทั้งช่วงขนาดยา (Dose range) ในหน่วยมิลลิลิตร (ml) และมิลลิกรัมต่อครั้ง (mg/dose) พร้อมคำแนะนำการบริหารยา

<details>
<summary><strong>English Description</strong></summary>

**Peddi-Dose** is a mobile-first web application designed to assist pharmacists, doctors, and healthcare professionals in quickly and accurately calculating drug dosages for pediatric patients based on their body weight. The application provides real-time results in both milliliters (ml) and milligrams per dose (mg/dose), along with administration notes for each drug.

</details>

## 🚀 ลิงก์สำหรับใช้งาน (Live Demo)

แอปถูก deploy บน **Vercel** — ลิงก์จะถูกสร้างอัตโนมัติหลัง push ไปยัง repository:

### **https://peddi-dose.vercel.app/** *(อัปเดตหลัง deploy ครั้งแรก)*

## ✨ คุณสมบัติหลัก (Key Features)

-   **คำนวณแบบ Real-time:** ผลลัพธ์อัปเดตทันทีที่กรอกน้ำหนักหรือเปลี่ยนชนิดยา — ไม่ต้องกดปุ่ม
-   **แสดงผล 2 หน่วย:** ค่าหลักเป็น **ml** พร้อม **mg/dose** เป็นค่ารอง
-   **โหมด Manual Dose:** ระบุขนาดยา (mg/kg/dose) เองเพื่อความยืดหยุ่นทางคลินิก
-   **Mobile-First:** UI ออกแบบให้ใช้งานบนมือถือเป็นหลัก เปิดมาเจอเครื่องคำนวณทันที
-   **PWA ติดตั้งได้:** ใช้งานออฟไลน์ ติดตั้งเป็นแอปบนมือถือได้
-   **Persist Last Drug:** จำยาที่ใช้ล่าสุดไว้ใน localStorage
-   **Dark Mode (Auto):** ตามการตั้งค่าระบบปฏิบัติการ (prefers-color-scheme)
-   **Accessibility:** รองรับ keyboard navigation, screen reader, focus visible

## 🎨 Design System

UI ได้รับแรงบันดาลใจจาก **Tesla Design Language** — minimal, monochrome + Electric Blue accent, ไม่มีเงา/gradient, 4px border-radius, 0.33s transitions
ดูรายละเอียดทั้งหมดได้ใน [DESIGN.md](./DESIGN.md)

## 📋 วิธีใช้งาน (How to Use)

1.  **ไปที่หน้าเว็บ:** https://pedi-dose-c9cec.web.app/
2.  **เลือกยา:** เลือกจาก dropdown (มี 10 รายการยาสามัญ)
3.  **กรอกน้ำหนัก:** ใส่น้ำหนักของผู้ป่วย (kg)
4.  **ดูผลลัพธ์:** ผลลัพธ์จะแสดงทันที — ค่าหลักเป็น **ml**, ค่ารองเป็น **mg/dose**, พร้อมคำแนะนำ
5.  **โหมด Manual (ถ้าต้องการ):** กด "ระบุเอง" เพื่อระบุ mg/kg/dose เอง
6.  **อ่านคำแนะนำ:** ดูข้อมูลการบริหารยา (ก่อน/หลังอาหาร, ความถี่) ใต้ผลลัพธ์

## 💊 รายการยาที่มีในโปรแกรม (Available Drugs)

10 รายการ ครอบคลุมยาที่ใช้บ่อยในเด็ก:

| ยา | ความเข้มข้น | หมวดหมู่ |
|---|---|---|
| Amoxycillin | 250mg/5ml | ยาปฏิชีวนะ |
| Augmentin | 228.5mg/5ml | ยาปฏิชีวนะ |
| Bactrim | 40mg/5ml | ยาปฏิชีวนะ |
| CPM (Chlorpheniramine) | 2mg/5ml | ยาแก้แพ้ |
| Dicloxacillin | 62.5mg/5ml | ยาปฏิชีวนะ |
| Domperidone | 5mg/5ml | ยาแก้คลื่นไส้ |
| Erythromycin | 125mg/5ml | ยาปฏิชีวนะ |
| Guafenesine | 100mg/5ml | ยาละลายเสมหะ |
| Ibuprofen | 100mg/5ml | ยาลดไข้ |
| Paracetamol | 120mg/5ml | ยาลดไข้ |

*หมายเหตุ: รายการยาและความเข้มข้นอาจมีการเปลี่ยนแปลง โปรดตรวจสอบจากหน้าเว็บโดยตรง*

## ⚠️ คำเตือนที่สำคัญ (Important Disclaimer)

**โปรแกรมนี้เป็นเพียงเครื่องมือช่วยคำนวณเบื้องต้นสำหรับบุคลากรทางการแพทย์เท่านั้น**

-   ข้อมูลที่ได้จากการคำนวณ **ไม่สามารถ** ใช้แทนวิจารณญาณทางการแพทย์ (Clinical Judgment) ได้
-   ผู้ใช้งานต้องมีความรู้ความเข้าใจเกี่ยวกับยาแต่ละชนิด และต้องทวนสอบความถูกต้องของขนาดยาให้เหมาะสมกับผู้ป่วยแต่ละรายเสมอ โดยพิจารณาจากสภาวะของผู้ป่วย, การทำงานของตับ/ไต, และข้อบ่งใช้อื่นๆ
-   **ห้าม** ผู้ป่วยหรือบุคคลทั่วไปใช้โปรแกรมนี้เพื่อปรับขนาดยาด้วยตนเองโดยเด็ดขาด
-   ผู้พัฒนาไม่รับผิดชอบต่อความเสียหายใดๆ ที่อาจเกิดขึ้นจากการใช้โปรแกรมนี้

## 👨‍💻 สำหรับนักพัฒนา (For Developers)

### เทคโนโลยี (Tech Stack)

-   **Package Manager:** [Bun](https://bun.sh/) ⚡
-   **Framework:** React 19
-   **Build Tool:** Vite 7 (with SWC)
-   **PWA:** vite-plugin-pwa
-   **Linting:** ESLint 9 (flat config) + Prettier
-   **Design System:** Custom CSS tokens (see [DESIGN.md](./DESIGN.md))

### การติดตั้งและรันโปรเจกต์ในเครื่อง (Local Setup)

ต้องติดตั้ง [Bun](https://bun.sh/) ก่อน (v1.1+)

1.  **Clone repository:**
    ```bash
    git clone https://github.com/suradet-ps/peddi-dose.git
    cd peddi-dose
    ```

2.  **ติดตั้ง dependencies:**
    ```bash
    bun install
    ```

3.  **รัน dev server:**
    ```bash
    bun run dev
    ```
    เปิดเบราว์เซอร์ที่ http://localhost:5173

4.  **Build production:**
    ```bash
    bun run build
    ```
    ไฟล์จะถูก build ไปที่ `dist/`

5.  **Preview production build:**
    ```bash
    bun run preview
    ```

6.  **Lint code:**
    ```bash
    bun run lint
    ```

7.  **Format code:**
    ```bash
    bun run format
    ```

### โครงสร้างโปรเจกต์ (Project Structure)

```
peddi-dose/
├── public/                       # Static assets (icons)
├── src/
│   ├── components/               # React components
│   │   ├── Header.jsx            # Minimal brand header
│   │   ├── Calculator.jsx        # Single-screen calculator
│   │   ├── ResultCard.jsx        # ml + mg/dose + notes
│   │   └── Footer.jsx            # Hospital + disclaimer
│   ├── data/
│   │   └── drugData.js           # Drug database
│   ├── hooks/
│   │   └── useDoseCalculator.js  # State + real-time calc
│   ├── utils/
│   │   └── doseMath.js           # Pure dose functions
│   ├── styles/
│   │   ├── tokens.css            # Design tokens
│   │   ├── base.css              # Reset + globals
│   │   └── app.css               # Component styles
│   ├── App.jsx                   # Top-level composition
│   └── main.jsx                  # React entry
├── DESIGN.md                     # Design system documentation
├── eslint.config.js              # ESLint flat config
├── vite.config.js                # Vite + PWA config
├── .prettierrc.json              # Prettier config
├── package.json                  # Project metadata
└── bun.lock                      # Bun lockfile
```

### การมีส่วนร่วม (Contributing)

1.  **Fork** the repository
2.  สร้าง Branch ใหม่สำหรับฟีเจอร์ของคุณ (`git checkout -b feature/AmazingFeature`)
3.  Commit การเปลี่ยนแปลงของคุณ (`git commit -m 'Add some AmazingFeature'`)
4.  Push ไปยัง Branch (`git push origin feature/AmazingFeature`)
5.  เปิด **Pull Request**

### การ Deploy (Deployment)

โปรแกรมนี้ deploy ผ่าน **Vercel** โดย auto-detect Vite (build command: `bun run build`, output: `dist`)

**วิธีที่ 1 — Vercel GitHub Integration (แนะนำ):**
1. ไปที่ [vercel.com](https://vercel.com) → New Project → Import repo นี้
2. Vercel จะ auto-detect Vite framework
3. กด Deploy — ทุก push ที่ `main` จะ deploy อัตโนมัติ

**วิธีที่ 2 — Vercel CLI:**
```bash
npm i -g vercel
bun run build
vercel --prod
```

Config อยู่ใน `vercel.json` (SPA rewrite + PWA service-worker headers)
