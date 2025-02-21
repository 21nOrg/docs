---
title: Frequently asked questions
---

# Frequently asked questions

## General

<details>
  <summary data-summary-text="Who owns Memotron?"></summary>
  Memotron is built and 100% owned by 21n (21st century native company) registered as Blank labs private limited in Hyderabad, India. 21n is a technology development company with triple bottom line at its core. Read our white paper [here](https://papers.21n.io/soft) to understand more.
</details>

<details>
  <summary data-summary-text="What happens to my data if Memotron is shut down for some reason?"></summary>
  We immensely value your data as much as you do. Therefore we prioritized building interoperability features on our roadmap. Even if Memotron doesn’t exist in 10 years down the line, you will still have access to all the your data safely exported or backed up on to your personal cloud.
</details>

<details>
  <summary data-summary-text="Why did you guys name it Memotron?"></summary>
  We are building a suite of tools for personal productivity and well-being. When we were brainstorming about ways to connect all of these tools together, we arrived at the idea to use the analogy of nucleus and its sub atoms from Physics/Chemistry. Just like electron, proton and neutron, we are building Memotron, Pointron, Selftron etc tools which all come together to form Nucleus - our super app for personal life.
</details>

<details>
  <summary data-summary-text="What does the hexagon in the logo represent?"></summary>
  The logo is a derivation of neuron (cell body part) - the fundamental building block of human biological memory.
</details>

---

## App

<details>
  <summary data-summary-text="What is the difference between offline account and cloud sync account?"></summary>

  **Offline version:** A user can use the offline version primarily on one device and cannot sync it to other devices. User can however backup their data to their personal cloud providers like iCloud, G drive or Dropbox. User can then restore if they are starting fresh.

  **Cloud version:** Memotron will provide cloud service where the user data is synced between all the user's devices and extensions in real time.
</details>

<details>
  <summary data-summary-text="Do I have to pay for cloud sync account?"></summary>
  Monetizing cloud sync account is how we planned to sustain the product. We value our user’s privacy and we would never sell any kind of user information by any means. Right now (Nov 2024), the cloud sync account is free to use. We will be introduced payment plans starting early 2025. We are trying to reduce the cost for cloud sync as much as possible and as a rough estimation, the cost will not be more than $10 per month.
</details>


<details>
  <summary data-summary-text="What is offline mode?"></summary>

  Cloud users can still use the app offline when they are not connected to the internet or intentionally wants to do so. Just go to Settings → Sync → Turn on offline mode. Your data will be synced once you are back online.
</details>

---

## Clipper extension

<details>
  <summary data-summary-text="Can I use Clipper extension offline like how I use the app?"></summary>

  This is not possible currently. A user needs a cloud sync account to use the Clipper extension. However, we will work on offline only version for Clipper in the near future.
</details>

<details>
  <summary data-summary-text="Can I use Clipper extension on my Firefox or Safari browsers?"></summary>

  We are still working on Firefox and Safari extensions. Appreciate your patience until we release a stable version on these browsers.
</details>

<details>
  <summary data-summary-text="What are all the list of browsers in which Memotron extension can be installed via Chrome web store?"></summary>

  Most of the chromium based browsers allows installing extensions from Chrome web store. The list includes but not limited to the following:

  - Microsoft Edge

  - Opera

  - Brave

  - Wavebox

  - Vivaldi

You can check the almost full list of browsers [here](https://github.com/nerdyslacker/desktop-web-browsers) and check if the browser you use is based on Chromium.
</details>

<details>
  <summary data-summary-text="Why Arc browser doesn’t show Memotron side panel?"></summary>

  If you are not already aware, Arc browser is built on top of Chromium open source project. Even though it markets itself as a Chrome replacement, it is forced to represent itself every single way as **Google Chrome** in the code due to this [issue](https://vivaldi.com/blog/user-agent-changes/). It is extremely hard for developers to detect if a user is using their app or extension from Arc browser or a different chromium fork or Google Chrome.

  You might ask, why do you even want to detect which browser it is? That’s because some browsers like Arc doesn’t support chromium APIs which are present in most other chromium based browsers. Having a way to detect the lack of support for APIs will make the task for developers easy to find an alternative way to implement it and show that part of interface to the users. But, what if developers can’t even detect?

  So, in a nutshell, we are still working to figure out a reliable way to detect if the extension is being used in Arc browser. Then, we will add an alternative implementation to show side panel.
</details>

---

*Updated on January 23, 2025, 3:17 PM UTC*

