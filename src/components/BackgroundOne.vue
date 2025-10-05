<script lang="ts" setup>
    import { onMounted, ref } from 'vue';
    import { useSettingsStore } from '@/stores/settings.ts';

    const settings = useSettingsStore();

    export type NonEmptyArray<A> = Array<A> & {
        0: A;
    };

    const canvasRef = ref<HTMLCanvasElement | null>(null);

    function random(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const randomElementFromArray = <T,>(arr: NonEmptyArray<T>): T =>
        arr[Math.floor(Math.random() * arr.length)] as T;

    onMounted(() => {
        if (canvasRef.value) {
            const canvas = canvasRef.value;
            const ctx = canvas.getContext('2d');

            if (!ctx) {
                return;
            }

            const rMin = 10;
            const rMax = 30;
            const count = 20;
            const activeRange = 50;

            class Circle {
                x: number;
                y: number;
                r: number;
                defaultR: number;
                dx: number;
                dy: number;
                color: string;
                ctx: CanvasRenderingContext2D;

                constructor(x: number, y: number, r: number, ctx: CanvasRenderingContext2D) {
                    this.x = x;
                    this.y = y;
                    this.r = r;
                    this.defaultR = r;
                    this.dx = randomElementFromArray(steps);
                    this.dy = randomElementFromArray(steps);
                    this.color = randomElementFromArray(colors);
                    this.ctx = ctx;
                }

                drow() {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = this.color;
                    this.ctx.fillStyle = this.color;
                    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
                    if (this.r - this.defaultR > 1) this.ctx.fill();
                    this.ctx.stroke();
                }

                update() {
                    if (this.x + this.r > width || this.x - this.r <= 0) {
                        this.dx = -this.dx;
                    }
                    if (this.y + this.r > height || this.y - this.r <= 0) {
                        this.dy = -this.dy;
                    }
                    this.x += this.dx;
                    this.y += this.dy;

                    if (
                        mouse.x - this.x < activeRange &&
                        mouse.x - this.x > -activeRange &&
                        mouse.y - this.y < activeRange &&
                        mouse.y - this.y > -activeRange &&
                        this.r < rMax * 2 &&
                        mouseover
                    ) {
                        this.r++;
                    } else if (this.r > this.defaultR) {
                        this.r--;
                    }

                    this.drow();
                }
            }

            const mouse = { x: 1, y: 1 };
            const circlesArray: InstanceType<typeof Circle>[] = [];
            let width = 200;
            let height = 1000;
            let mouseover = false;
            const steps: NonEmptyArray<number> = [-3, -2, -1, 1, 2, 3];
            const colors: NonEmptyArray<string> = ['red', 'green', 'blue', 'purple'];

            const init = () => {
                resize();
                for (let i = 0; i < count; i++) {
                    circlesArray.push(
                        new Circle(
                            random(rMax, width - rMax * 2),
                            random(rMax, height - rMax * 2),
                            random(rMin, rMax),
                            ctx,
                        ),
                    );
                }
            };

            const update = () => {
                ctx.clearRect(0, 0, width, height);
                for (let i = 0; i < count; i++) {
                    circlesArray[i]?.update();
                }
            };

            const animate = function () {
                update();
                requestAnimationFrame(animate);
            };

            init();
            animate();

            document.addEventListener('mousemove', function (e) {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
            });

            document.addEventListener('mouseover', function () {
                if (!mouseover) mouseover = true;
            });

            document.addEventListener('mouseleave', function () {
                if (mouseover) mouseover = false;
            });

            window.addEventListener('resize', resize);
            function resize() {
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width;
                canvas.height = height;
            }
        }
    });
</script>

<template>
    <canvas
        v-show="settings.animationEnabled"
        ref="canvasRef"
        class="pointer-none fixed inset-0 z-0 h-full w-full select-none"
    />
</template>
