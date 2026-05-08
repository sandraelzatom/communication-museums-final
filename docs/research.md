# Research Documentation: The Museum of Echoes
**Author:** San Drael | **Subject:** Communication Evolution (1830–Present)

---

## 1. Abstract
This project explores the transition from **Discrete Signaling** (Telegraphy) to **Wireless Propagation** (Radio) and finally to **Graphic Logic** (Personal Computing). The goal of the interface is to reflect the technical "texture" of each era through motion and light.

## 2. Historical Timeline & Key Innovations

| Era | Primary Signal | Key Figure | Social Impact |
| :--- | :--- | :--- | :--- |
| **1837** | Electrical Pulse | Samuel Morse | Decoupled communication from transportation. |
| **1895** | Radio Frequency | G. Marconi | Enabled mass-broadcasting and maritime safety. |
| **1984** | Digital Logic | Steve Jobs | Democratized high-level toolsets for the individual. |

## 3. Technical Implementation (UI/UX)
To achieve the "Claude-like" aesthetic, the following technical choices were made:

### A. Intersection Observer API
We used the `IntersectionObserver` to trigger CSS classes (`.reveal`). This ensures that animations only play when the user is actually looking at the content, optimizing performance.

### B. Glassmorphism & Backdrop Filters
`backdrop-filter: blur(15px)` was applied to the navigation and terminal boxes. This creates a sense of depth, mimicking a glass-and-steel museum display case.

### C. Variable Accents
The CSS uses a dynamic `--accent` variable. When a user enters the Telegraph exhibit, the UI shifts to **Industrial Orange**; for Radio, it shifts to **Signal Blue**.

## 4. Bibliography
* Standage, T. (1998). *The Victorian Internet*. Walker & Company.
* Campbell-Kelly, M. (2013). *Computer: A History of the Information Machine*. Westview Press.
* Museum of Science and Industry Archive (Artifacts 4492-B).
