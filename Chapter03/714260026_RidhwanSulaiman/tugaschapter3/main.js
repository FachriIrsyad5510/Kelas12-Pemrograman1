kaplay({ background: [91, 166, 117] });

setCursor("none");

loadSprite("cursor", "assets/cursor.png");
loadSprite("asap", "assets/asap.png");
loadSprite("cursor-o", "assets/cursor-o.png");
loadSprite("tree", "assets/tree.png");
loadSprite("fire", "assets/fire.png", {
    sliceX: 2,
    frameWidth: 40,
    frameHeight: 49,
    anims: {
        "anim": {
            from: 0,
            to: 1,
            loop: true,
            speed: 6.67,
        },
    },
});

scene("canva", () => {

    let firesExtinguished = 0;
    let timeLeft = 30;
    let gameOver = false;

    const scoreLabel = add([
        text("Api dipadamkan: 0", { size: 24 }),
        pos(20, 20),
        z(100),
        color(255, 255, 255),
        fixed(),
    ]);

    const timerLabel = add([
        text("Waktu: 30", { size: 24 }),
        pos(width() - 20, 20),
        anchor("topright"),
        z(100),
        color(255, 255, 255),
        fixed(),
    ]);

    const timerLoop = loop(1, () => {
        if (gameOver) return;

        timeLeft--;
        timerLabel.text = `Waktu: ${timeLeft}`;

        if (timeLeft <= 0) {
            gameOver = true;
            timerLoop.cancel();
            add([
                text(`Waktu habis!\nApi dipadamkan: ${firesExtinguished}`, {
                    size: 36,
                    align: "center",
                }),
                pos(center()),
                anchor("center"),
                z(200),
                color(255, 255, 255),
                fixed(),
            ]);
        }
    });

    for (let i = 0; i < 4; i++) {
        for (let e = 0; e < 3; e++) {

            const treeX = 250 + (i * 220);
            const treeY = 120 + (e * 140);

            add([
                sprite("tree"),
                pos(treeX, treeY),
                area(),
                anchor("center"),
            ]);

            const fire = add([
                sprite("fire"),
                pos(
                    treeX + rand(-40, 40),
                    treeY + rand(-30, 20)
                ),
                area(),
                anchor("center"),
                z(10),
                "fire",
            ]);

            const fire1 = add([
                sprite("fire"),
                pos(
                    treeX + rand(-50, 50),
                    treeY + rand(-60, 10)
                ),
                area(),
                anchor("center"),
                z(10),
                "fire",
            ]);

            fire.play("anim");
            fire1.play("anim");
        }
    }

    onClick("fire", (f) => {
        if (gameOver || f.isExtinguished) return;

        f.isExtinguished = true;
        f.untag("fire");

        f.use(opacity(1));
        tween(
            f.opacity,
            0,
            0.3,
            (val) => f.opacity = val,
            easings.easeOutQuad
        ).then(() => {
            destroy(f);
            firesExtinguished++;
            scoreLabel.text = `Api dipadamkan: ${firesExtinguished}`;

            if (firesExtinguished >= 24) {
                gameOver = true;
                timerLoop.cancel();
                add([
                    text("SELAMAT!\nKamu berhasil padamkan 24 api!", {
                        size: 40,
                        align: "center",
                    }),
                    pos(center()),
                    anchor("center"),
                    z(200),
                    color(255, 255, 0),
                    fixed(),
                ]);
                setTimeout(function () {
                    window.location.reload();
                }, 2000);
            }
        });
    });

    const cursor = add([
        sprite("cursor"),
        pos(0, 0),
        z(1000),
        area(),
    ]);

    onUpdate(() => {
        const currentMousePos = mousePos();
        cursor.pos = currentMousePos;
    });

    onMouseDown(() => {
        cursor.use(sprite("cursor-o"));
    });

    onMouseRelease(() => {
        cursor.use(sprite("cursor"));
    });
});

go("canva");