---
   תיאור: "בניית וקידום חבילות בעזרת שרשרת הכלים אנדמן."
   כותרת: שימוש באנדמן
---

כדי להקל ניהול חבילות למען כולם, אולטראמרין לינוקס ומעבדות פיירא פיתחו את שרשרת הכלים אנדמן, ידועה גם כ: [`anda`](https://github.com/FyraLabs/anda).

הגרסה העדכנית ביותר בזמן הכתיבה היא: `0.1.6`.

## התחלה

 התקן אנדמן עם`dnf install anda`. אנדמן נמצא במאגר טרה.

## התאמת הגדרות

אנדמן משתמש בקובץ הגדרות ההיחודי לכל לפרוייקט הכתוב ב HCL. קובץ ההגדרות נקרא `anda.hcl` ונמצא בroot של ספריית הפרוייקט.

בנוסף, בשביל מציאת פרווקטים קלה יותר, קובצי ההגדרות יכולים לעלות באופן מקומי מהספרייה המקומית. זוהי אופציה שימושית אם מספר פרוייקטים קיימים באותה הספרייה. למשל, מאגרי טרה ואולטראמרין לינוקס נשמרים במאגר אחד עם כל החבילות.

כדי להתחיל לבנות חבילה בפרוייקט קייים, פשוט הרץ `<anda build <project` מספריית הפרוייקט
