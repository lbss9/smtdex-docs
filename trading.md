---
title: Trading
nav_order: 11
---

# Trading

Trade demons and Macca with another player safely. Both sides must confirm, and
the transfer happens all at once — nobody can lose an item without receiving the
other side.

## Flow

1. **Start** a trade with another player:

   ```
   /trade start usuario: @Friend
   ```

2. **Add** demons to your side, one at a time:

   ```
   /trade add demon: a1b2c3
   ```

3. **Offer Macca** if you want:

   ```
   /trade macca valor: 5000
   ```

4. **View** the current offer any time:

   ```
   /trade view
   ```

5. **Confirm** when you're happy:

   ```
   /trade confirm
   ```

   When **both** players have confirmed, the trade executes.

6. **Cancel** to call it off:

   ```
   /trade cancel
   ```

## Safety

- Changing your offer (adding a demon or changing Macca) **resets both
  confirmations**, so nobody can swap the deal after you agreed.
- The exchange is **atomic**: demons and Macca move together in a single
  transaction. If either player no longer has what they offered, the trade is
  cancelled and nothing changes.
