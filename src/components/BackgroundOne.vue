<script lang="ts" setup>
    import { ref } from 'vue';

    const canvasRef = ref<HTMLCanvasElement | null>(null);

    // onMounted(() => {
    //     if (canvasRef.value) {
    //         const canvas = canvasRef.value;
    //         const ctx = canvas.getContext('2d');
    //
    //         if (!ctx) {
    //             return;
    //         }
    //
    //         const rMin = 10;
    //         const rMax = 30;
    //         const count = 20;
    //         // const activeRange = 50;
    //
    //         class Circle {
    //             x: number;
    //             y: number;
    //             r: number;
    //             defaultR: number;
    //             dx: number;
    //             dy: number;
    //             color: string;
    //
    //             constructor(x: number, y: number, r: number) {
    //                 this.x = x;
    //                 this.y = y;
    //                 this.r = r;
    //                 this.defaultR = r;
    //                 this.dx = randomArray(steps);
    //                 this.dy = randomArray(steps);
    //                 this.color = randomArray(colors);
    //             }
    //
    //             drow(ctx: CanvasRenderingContext2D) {
    //                 ctx.beginPath();
    //                 ctx.strokeStyle = this.color;
    //                 ctx.fillStyle = this.color;
    //                 ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    //                 if (this.r - this.defaultR > 1) ctx.fill();
    //                 ctx.stroke();
    //             }
    //
    //             update(
    //                 ctx: CanvasRenderingContext2D,
    //                 mouse: { x: number; y: number },
    //                 activeRange: number = activeRange,
    //                 rMax: number = rMax,
    //                 mouseover: boolean,
    //                 width: number,
    //                 height: number,
    //             ) {
    //                 if (this.x + this.r > width || this.x - this.r <= 0) {
    //                     this.dx = -this.dx;
    //                 }
    //                 if (this.y + this.r > height || this.y - this.r <= 0) {
    //                     this.dy = -this.dy;
    //                 }
    //                 this.x += this.dx;
    //                 this.y += this.dy;
    //
    //                 if (
    //                     mouse.x - this.x < activeRange &&
    //                     mouse.x - this.x > -activeRange &&
    //                     mouse.y - this.y < activeRange &&
    //                     mouse.y - this.y > -activeRange &&
    //                     this.r < rMax * 2 &&
    //                     mouseover
    //                 ) {
    //                     this.r++;
    //                 } else if (this.r > this.defaultR) {
    //                     this.r--;
    //                 }
    //
    //                 this.drow(ctx);
    //             }
    //         }
    //
    //         const mouse = { x: 1, y: 1 };
    //         const circlesArray: InstanceType<typeof Circle>[] = [];
    //         let width = 200;
    //         let height = 1000;
    //         let mouseover = false;
    //         const steps = [-3, -2, -1, 1, 2, 3];
    //         const colors = ['red', 'green', 'blue', 'purple'];
    //
    //         function random(min: number, max: number): number {
    //             return Math.floor(Math.random() * (max - min) + min);
    //         }
    //         function randomArray<T>(array: T[]): T {
    //             return array[Math.floor(Math.random() * array.length)];
    //         }
    //
    //         function init() {
    //             resize();
    //             for (let i = 0; i < count; i++) {
    //                 circlesArray.push(
    //                     new Circle(
    //                         random(rMax, width - rMax * 2),
    //                         random(rMax, height - rMax * 2),
    //                         random(rMin, rMax),
    //                     ),
    //                 );
    //             }
    //         }
    //
    //         function update() {
    //             ctx.clearRect(0, 0, width, height);
    //             for (let i = 0; i < count; i++) {
    //                 circlesArray[i].update();
    //             }
    //         }
    //
    //         const animate = function () {
    //             update();
    //             requestAnimationFrame(animate);
    //         };
    //
    //         init();
    //         animate();
    //
    //         document.addEventListener('mousemove', function (e) {
    //             mouse.x = e.clientX;
    //             mouse.y = e.clientY;
    //         });
    //
    //         document.addEventListener('mouseover', function () {
    //             if (!mouseover) mouseover = true;
    //         });
    //
    //         document.addEventListener('mouseleave', function () {
    //             if (mouseover) mouseover = false;
    //         });
    //
    //         window.addEventListener('resize', resize);
    //         function resize() {
    //             width = window.innerWidth;
    //             height = window.innerHeight;
    //             canvas.width = width;
    //             canvas.height = height;
    //         }
    //     }
    // });
</script>

<template>
    <canvas ref="canvasRef" class="fixed inset-0 z-10 h-full w-full select-none" />
</template>
