## Goal
Ensure the contact form on this site submits successfully to `support@digifrenzy.com`, matching the working setup in the **Framer Clone Craft** project.

## Findings
- `src/components/site/Contact.tsx` already uses the same Web3Forms integration as Framer Clone Craft:
  - Endpoint: `https://api.web3forms.com/submit`
  - Access key: `361d4c5a-21f6-46c9-91d0-d6045017fef5` (the same key that routes to `support@digifrenzy.com` in Web3Forms' dashboard)
  - Same field schema (name, email, mobile, businessName, businessType, services)
- The recipient address (`support@digifrenzy.com`) is configured on the Web3Forms account tied to that access key — no code change is needed to set the destination.
- One discrepancy vs. the reference project: `from_name` is currently `"D\ni\ng\ni\nF\nr\ne\nn\nz\ny* Website"` (leftover newline-split string from an earlier logo edit). Framer Clone Craft uses `"DigiFrenzy Website"`. This makes the sender label look broken in the inbox but does not block delivery.

## Changes
1. **`src/components/site/Contact.tsx`** — set `from_name: "DigiFrenzy Website"` to match the reference project and produce a clean sender label in the email.

## Verification
- Submit a test enquiry from the live preview and confirm the success toast ("Thanks! We'll be in touch shortly.").
- Confirm the email lands in `support@digifrenzy.com` with sender label "DigiFrenzy Website".

## Notes
- No backend, secrets, or Cloud changes required — Web3Forms handles routing.
- If you ever want to change the recipient email, that is done in the Web3Forms dashboard for this access key, not in code.