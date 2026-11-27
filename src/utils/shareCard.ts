/**
 * CRIME - Share Result Card
 * Generates a 1080x1920 (story format) noir case-closure card as a PNG.
 * Deliberately spoiler-free: never names the killer or the solution.
 */

export interface CrimeShareCardData {
  fileNumber: string;
  caseTitleAr: string;
  innocentsWon: boolean;
  detectiveRank: string; // e.g. "محقق أسطوري // RANK S"
  teamRating: string; // e.g. "ممتاز جداً (١٠٠%)"
  roundsPlayed: number;
  totalRounds: number;
  innocentsJailed: number;
  playersCount: number;
}

const W = 1080;
const H = 1920;

async function ensureFontsLoaded(): Promise<void> {
  try {
    await Promise.all([
      document.fonts.load('900 110px Tajawal'),
      document.fonts.load('700 60px Tajawal'),
      document.fonts.load('500 44px Tajawal'),
      document.fonts.load('900 96px Cinzel'),
      document.fonts.load('700 34px "Courier Prime"'),
      document.fonts.load('400 30px "Courier Prime"'),
    ]);
    await document.fonts.ready;
  } catch {
    // Fonts are a nicety; fall back to system fonts.
  }
}

function drawNoise(ctx: CanvasRenderingContext2D): void {
  ctx.save();
  ctx.globalAlpha = 0.05;
  for (let i = 0; i < 2600; i++) {
    const x = Math.random() * W;
    const y = Math.random() * H;
    ctx.fillStyle = Math.random() > 0.5 ? '#ffffff' : '#000000';
    ctx.fillRect(x, y, 1.4, 1.4);
  }
  ctx.restore();
}

function drawRedThreads(ctx: CanvasRenderingContext2D): void {
  ctx.save();
  ctx.strokeStyle = 'rgba(225, 29, 72, 0.22)';
  ctx.lineWidth = 3;
  const lines: Array<[number, number, number, number]> = [
    [-60, 480, W * 0.62, 240],
    [W * 0.38, 1560, W + 60, 1290],
    [W + 40, 700, W * 0.55, 980],
  ];
  for (const [x1, y1, x2, y2] of lines) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    // pins
    for (const [px, py] of [
      [x1, y1],
      [x2, y2],
    ]) {
      ctx.beginPath();
      ctx.arc(Math.max(24, Math.min(W - 24, px)), py, 9, 0, Math.PI * 2);
      ctx.fillStyle = '#e11d48';
      ctx.fill();
    }
  }
  ctx.restore();
}

/** Word-wrap Arabic/Latin text centered, returns final y. */
function drawWrapped(
  ctx: CanvasRenderingContext2D,
  text: string,
  cx: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
): number {
  const words = text.split(' ');
  const lines: string[] = [];
  let line = '';
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  for (const l of lines) {
    ctx.fillText(l, cx, y);
    y += lineHeight;
  }
  return y;
}

export async function generateCrimeShareCard(
  data: CrimeShareCardData,
): Promise<Blob> {
  await ensureFontsLoaded();

  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D not supported');

  // ---- Background: near-black with a red glow up top and vignette
  ctx.fillStyle = '#0a0a0c';
  ctx.fillRect(0, 0, W, H);

  const glow = ctx.createRadialGradient(W / 2, -140, 60, W / 2, -140, 900);
  glow.addColorStop(0, 'rgba(225, 29, 72, 0.34)');
  glow.addColorStop(1, 'rgba(225, 29, 72, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  const vignette = ctx.createRadialGradient(W / 2, H / 2, H * 0.28, W / 2, H / 2, H * 0.75);
  vignette.addColorStop(0, 'rgba(0,0,0,0)');
  vignette.addColorStop(1, 'rgba(0,0,0,0.55)');
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, W, H);

  drawRedThreads(ctx);
  drawNoise(ctx);

  // Outer case-file border
  ctx.strokeStyle = 'rgba(255,255,255,0.14)';
  ctx.lineWidth = 3;
  ctx.strokeRect(46, 46, W - 92, H - 92);

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // ---- Header
  ctx.fillStyle = '#8b8b93';
  ctx.font = '400 30px "Courier Prime", monospace';
  ctx.fillText('CRIMINAL  INVESTIGATION  GAME', W / 2, 132);

  ctx.direction = 'ltr';
  ctx.fillStyle = '#f5f5f4';
  ctx.font = '900 96px Cinzel, serif';
  ctx.fillText('CRIME', W / 2 - 195, 246);
  ctx.fillStyle = '#e11d48';
  ctx.font = '900 96px Tajawal, sans-serif';
  ctx.direction = 'rtl';
  ctx.fillText('جريمة', W / 2 + 195, 246);

  ctx.strokeStyle = 'rgba(225,29,72,0.5)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 300, 310);
  ctx.lineTo(W / 2 + 300, 310);
  ctx.stroke();

  // ---- Case file block
  ctx.fillStyle = 'rgba(255,255,255,0.045)';
  ctx.fillRect(110, 400, W - 220, 300);
  ctx.strokeStyle = 'rgba(255,255,255,0.14)';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(110, 400, W - 220, 300);

  ctx.fillStyle = '#e11d48';
  ctx.font = '700 34px "Courier Prime", monospace';
  ctx.direction = 'ltr';
  ctx.fillText(data.fileNumber, W / 2, 452);

  ctx.fillStyle = '#8b8b93';
  ctx.font = '500 40px Tajawal, sans-serif';
  ctx.direction = 'rtl';
  ctx.fillText('قضية', W / 2, 512);

  ctx.fillStyle = '#f5f5f4';
  ctx.font = '700 62px Tajawal, sans-serif';
  drawWrapped(ctx, data.caseTitleAr, W / 2, 580, W - 320, 76);

  // ---- Outcome stamp (rotated)
  ctx.save();
  ctx.translate(W / 2, 900);
  ctx.rotate(-0.06);
  const stampText = data.innocentsWon ? 'انكشف القاتل' : 'هرب القاتل';
  const stampColor = data.innocentsWon ? '#10b981' : '#e11d48';
  ctx.font = '900 92px Tajawal, sans-serif';
  const stampWidth = ctx.measureText(stampText).width + 90;
  ctx.strokeStyle = stampColor;
  ctx.lineWidth = 7;
  ctx.strokeRect(-stampWidth / 2, -86, stampWidth, 172);
  ctx.strokeRect(-stampWidth / 2 + 12, -86 + 12, stampWidth - 24, 172 - 24);
  ctx.fillStyle = stampColor;
  ctx.direction = 'rtl';
  ctx.fillText(stampText, 0, 4);
  ctx.restore();

  ctx.fillStyle = '#a1a1aa';
  ctx.font = '500 42px Tajawal, sans-serif';
  ctx.fillText(
    data.innocentsWon ? 'فريق المحققين حسم القضية' : 'القاتل أفلت من بين أيديهم',
    W / 2,
    1050,
  );

  // ---- Stats grid (2 x 2)
  const stats: Array<{ label: string; value: string }> = [
    { label: 'رتبة الفريق', value: data.detectiveRank.split('//')[0].trim() },
    { label: 'تقييم الأداء', value: data.teamRating },
    { label: 'جولات التحقيق', value: `${data.roundsPlayed} / ${data.totalRounds}` },
    { label: 'المحققون', value: `${data.playersCount} لاعبين` },
  ];
  const gridTop = 1150;
  const cellW = (W - 220 - 24) / 2;
  const cellH = 150;
  stats.forEach((s, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 110 + col * (cellW + 24);
    const y = gridTop + row * (cellH + 24);
    ctx.fillStyle = 'rgba(255,255,255,0.045)';
    ctx.fillRect(x, y, cellW, cellH);
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, cellW, cellH);
    ctx.fillStyle = '#8b8b93';
    ctx.font = '500 32px Tajawal, sans-serif';
    ctx.fillText(s.label, x + cellW / 2, y + 46);
    ctx.fillStyle = '#f5f5f4';
    ctx.font = '700 44px Tajawal, sans-serif';
    ctx.fillText(s.value, x + cellW / 2, y + 104);
  });

  // ---- Challenge + URL footer
  ctx.fillStyle = '#f5f5f4';
  ctx.font = '700 52px Tajawal, sans-serif';
  ctx.fillText('تقدر تكشف القاتل قبل ما يهرب؟', W / 2, 1650);

  ctx.fillStyle = '#e11d48';
  ctx.font = '700 40px "Courier Prime", monospace';
  ctx.direction = 'ltr';
  ctx.fillText('thecrime.vercel.app', W / 2, 1730);

  ctx.fillStyle = '#5b5b63';
  ctx.font = '400 28px "Courier Prime", monospace';
  ctx.fillText('PASS & PLAY · 4 DETECTIVES · ONE KILLER', W / 2, 1790);

  ctx.direction = 'rtl';

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error('Failed to encode share card'));
    }, 'image/png');
  });
}

/** Share the card via the native sheet when possible, else download it. */
export async function shareCrimeResult(data: CrimeShareCardData): Promise<'shared' | 'downloaded'> {
  const blob = await generateCrimeShareCard(data);
  const file = new File([blob], 'crime-case-result.png', { type: 'image/png' });

  const nav = navigator as Navigator & {
    canShare?: (d: { files: File[] }) => boolean;
    share?: (d: { files: File[]; title?: string; text?: string }) => Promise<void>;
  };

  if (nav.canShare && nav.share && nav.canShare({ files: [file] })) {
    await nav.share({
      files: [file],
      title: 'جريمة | CRIME',
      text: 'نتيجة التحقيق في لعبة جريمة — thecrime.vercel.app',
    });
    return 'shared';
  }

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'crime-case-result.png';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
  return 'downloaded';
}
