
import { useEffect, useRef } from "react";

export default function BackgroundFX() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frameId = 0;
    let time = 0;
    let running = false;

    let particles = [];
    let stars = [];

    const mouse = { x: -1000, y: -1000, active: false };

    const random = (min, max) =>
      min + Math.random() * (max - min);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Dense particles form the glowing cosmic vortex.
      
const count = Math.min(
  2200,
  Math.max(1200, Math.floor((width * height) / 550))
);

particles = Array.from({ length: count }, (_, i) => {
  const angle = random(0, Math.PI * 2);

  return {
    angle,
    radius: Math.sqrt(Math.random()),
    speed: random(0.001, 0.005),
    size: random(0.4, 1.8),
    phase: random(0, Math.PI * 2),
    orbit: random(0.65, 1.15),
    stretch: random(0.75, 1.2),
    color: Math.random(),
    alpha: random(0.35, 1),
    seed: i,
    x: 0,
    y: 0,
    previousX: 0,
    previousY: 0,
  };
});


      stars = Array.from({ length: 100 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: random(0.3, 1.1),
        phase: random(0, Math.PI * 2),
      }));
    }

    // Responsive vortex center, placed behind the portfolio content.
    
function getVortex() {
  return {
    x: width * 0.5,
    y: height * 0.48,
    radius: Math.max(width * 0.68, height * 1.05),
  };
}


    function particleColor(p, alpha) {
      if (p.color < 0.42) {
        return `rgba(0, 190, 255, ${alpha})`;
      }

      if (p.color < 0.72) {
        return `rgba(35, 90, 255, ${alpha})`;
      }

      if (p.color < 0.91) {
        return `rgba(145, 65, 255, ${alpha})`;
      }

      return `rgba(0, 255, 235, ${alpha})`;
    }

    // Create a dark sphere with a luminous event horizon.
    function drawCore(cx, cy, radius) {
      const coreRadius = radius * 0.25;

      const glow = ctx.createRadialGradient(
        cx, cy, coreRadius * 0.65,
        cx, cy, radius * 1.04
      );

      glow.addColorStop(0, "rgba(0, 0, 0, 0)");
      glow.addColorStop(0.36, "rgba(0, 15, 65, 0.06)");
      glow.addColorStop(0.58, "rgba(0, 135, 255, 0.12)");
      glow.addColorStop(0.72, "rgba(0, 235, 255, 0.17)");
      glow.addColorStop(0.83, "rgba(90, 35, 255, 0.12)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.04, 0, Math.PI * 2);
      ctx.fill();

      const sphere = ctx.createRadialGradient(
        cx - coreRadius * 0.3,
        cy - coreRadius * 0.35,
        coreRadius * 0.03,
        cx,
        cy,
        coreRadius * 1.15
      );

      sphere.addColorStop(0, "rgba(1, 7, 23, 0.98)");
      sphere.addColorStop(0.55, "rgba(0, 4, 18, 0.99)");
      sphere.addColorStop(0.82, "rgba(0, 12, 39, 0.98)");
      sphere.addColorStop(0.94, "rgba(0, 75, 135, 0.8)");
      sphere.addColorStop(1, "rgba(0, 230, 255, 0.15)");

      ctx.beginPath();
      ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
      ctx.fillStyle = sphere;
      ctx.fill();

      // Fine luminous rim.
      ctx.beginPath();
      ctx.ellipse(
        cx,
        cy,
        coreRadius * 1.02,
        coreRadius * 0.98,
        -0.12,
        0,
        Math.PI * 2
      );

      ctx.strokeStyle = "rgba(0, 220, 255, 0.32)";
      ctx.lineWidth = 1.3;
      ctx.stroke();
    }

    // Particle flow bends around the dark central sphere.
    function updateParticles(vortex) {
      const { x: cx, y: cy, radius } = vortex;

      particles.forEach((p) => {
        p.previousX = p.x;
        p.previousY = p.y;

        p.angle += p.speed * (p.radius < 0.35 ? -1.2 : 1);

        const wave =
          Math.sin(time * 0.018 + p.phase + p.angle * 3) * 0.018;

        const r = Math.max(
          0.28,
          p.radius + wave +
            Math.sin(time * 0.006 + p.phase) * 0.025
        );

        const angle = p.angle + Math.sin(time * 0.004 + p.phase) * 0.16;

        const flatten = 0.7 + p.radius * 0.14;

        p.x =
          cx +
          Math.cos(angle) * radius * r * p.orbit;

        p.y =
          cy +
          Math.sin(angle) * radius * r * flatten * p.stretch;

        // Cursor gently bends nearby particles.
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 130 && distance > 0) {
            const force = (130 - distance) / 130;

            p.x += (dx / distance) * force * 1.3;
            p.y += (dy / distance) * force * 1.3;
          }
        }
      });
    }

    // Draw the dense, colorful particle cloud.
    function drawParticles(vortex) {
      const { x: cx, y: cy, radius } = vortex;

      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      particles.forEach((p) => {
        const dx = p.x - cx;
        const dy = p.y - cy;
        const distance = Math.hypot(dx, dy);

        // Keep the event horizon visually dark.
        if (distance < radius * 0.23) return;

        const pulse =
          0.65 + Math.sin(time * 0.03 + p.phase) * 0.35;

        const alpha = p.alpha * pulse * 0.65;

        // Curved light trails.
        if (p.previousX !== 0 && p.previousY !== 0) {
          ctx.beginPath();
          ctx.moveTo(p.previousX, p.previousY);
          ctx.lineTo(p.x, p.y);

          ctx.strokeStyle = particleColor(p, alpha * 0.65);
          ctx.lineWidth = p.size * 0.85;
          ctx.stroke();
        }

        // Individual glowing particles.
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * pulse, 0, Math.PI * 2);

        ctx.fillStyle = particleColor(p, alpha);
        ctx.fill();
      });

      ctx.restore();
    }

    // Long flowing spiral ribbons around the sphere.
    function drawSpiralRibbons(vortex) {
      const { x: cx, y: cy, radius } = vortex;

      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      for (let band = 0; band < 9; band++) {
        const startAngle = time * 0.004 + band * 0.7;
        const bandRadius = radius * (0.38 + band * 0.047);

        ctx.beginPath();

        for (let i = 0; i <= 180; i++) {
          const t = i / 180;
          const angle = startAngle + t * Math.PI * 2.5;

          const r =
            bandRadius +
            Math.sin(t * 12 + time * 0.012 + band) * radius * 0.035;

          const x = cx + Math.cos(angle) * r;
          const y =
            cy +
            Math.sin(angle) * r *
              (0.67 + Math.sin(time * 0.003 + band) * 0.035);

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        const gradient = ctx.createLinearGradient(
          cx - radius,
          cy - radius,
          cx + radius,
          cy + radius
        );

        gradient.addColorStop(0, "rgba(0, 100, 255, 0.015)");
        gradient.addColorStop(0.35, "rgba(0, 220, 255, 0.15)");
        gradient.addColorStop(0.65, "rgba(125, 50, 255, 0.2)");
        gradient.addColorStop(1, "rgba(0, 200, 255, 0.025)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = band % 3 === 0 ? 1.7 : 0.85;
        ctx.stroke();
      }

      ctx.restore();
    }

    // Tiny stars add depth without overwhelming the website.
    function drawStars() {
      stars.forEach((star) => {
        const alpha =
          0.15 + (Math.sin(time * 0.025 + star.phase) + 1) * 0.16;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 205, 255, ${alpha})`;
        ctx.fill();
      });
    }

    function drawCursorGlow() {
      if (!mouse.active) return;

      const glow = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, 160
      );

      glow.addColorStop(0, "rgba(0, 180, 255, 0.08)");
      glow.addColorStop(1, "rgba(0, 180, 255, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(
        mouse.x - 160,
        mouse.y - 160,
        320,
        320
      );
    }

    function render() {
      if (!running) return;

      time += 1;

      ctx.clearRect(0, 0, width, height);

      const vortex = getVortex();

      drawStars();
      drawSpiralRibbons(vortex);
      updateParticles(vortex);
      drawParticles(vortex);
      drawCore(vortex.x, vortex.y, vortex.radius);
      drawCursorGlow();

      if (!motionPreference.matches) {
        frameId = requestAnimationFrame(render);
      }
    }

    
function drawFullScreenGlow() {
  const glow = ctx.createRadialGradient(
    width * 0.5,
    height * 0.48,
    0,
    width * 0.5,
    height * 0.48,
    Math.max(width, height) * 0.75
  );

  glow.addColorStop(0, "rgba(0, 65, 125, 0.13)");
  glow.addColorStop(0.4, "rgba(0, 100, 155, 0.09)");
  glow.addColorStop(0.75, "rgba(0, 55, 100, 0.07)");
  glow.addColorStop(1, "rgba(0, 0, 0, 0)");

  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);
}


    function start() {
      cancelAnimationFrame(frameId);
      running = true;

      if (motionPreference.matches) {
        ctx.clearRect(0, 0, width, height);
        drawFullScreenGlow();

        const vortex = getVortex();

        updateParticles(vortex);
        drawStars();
        drawSpiralRibbons(vortex);
        drawParticles(vortex);
        drawCore(vortex.x, vortex.y, vortex.radius);

        return;
      }

      frameId = requestAnimationFrame(render);
    }

    function onPointerMove(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    }

    function onPointerLeave() {
      mouse.active = false;
    }

    function onMotionChange() {
      start();
    }

    function onResize() {
      resize();
      start();
    }

    resize();
    start();

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("pointermove", onPointerMove, {
      passive: true,
    });
    window.addEventListener("pointerleave", onPointerLeave, {
      passive: true,
    });

    motionPreference.addEventListener("change", onMotionChange);

    return () => {
      running = false;
      cancelAnimationFrame(frameId);

      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);

      motionPreference.removeEventListener(
        "change",
        onMotionChange
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="background-fx-layer"
      aria-hidden="true"
    />
  );
}
