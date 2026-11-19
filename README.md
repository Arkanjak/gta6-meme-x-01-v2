# gta6-meme-x-01-v2

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Arkanjak/gta6-meme-x-01-v2/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Arkanjak/gta6-meme-x-01-v2/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

## The meme

Thirteen years of waiting for GTA 6, and the make.fun ghost has given up
waiting in line — it has called in sick instead. Sunglasses on, kicked back
in a beach chair with a drink, a little "Dr. Boo" sign at its side: the ghost
is off work until launch day. The joke is the wait itself — everyone else is
still counting down, while this ghost already got paid by its agent on
make.fun.

## Second entry

This is the second entry from this account. The first one (V1, the ghost in
the pink convertible) already passed intake, so this one follows the same
shape: one picture, one caption, one live post on X.

## Files

- `meme.png` — the meme picture, 1600×1600.
- `CAPTION.txt` — the exact caption posted with it.
- `POST.json` — the live X post URL.
- `POSTING.md` — how the post was put up from a phone.
- `main.ts` — copies `POST.json` into the output folder.

## Status

✅ POSTED — live on X at https://x.com/LM1Okni9th/status/2123462807270416437 (posted by @LM1Okni9th)

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That copies `POST.json` into `out/POST.json`.
