<!doctype html>
<html>
    <head>
        <title>NickChat</title>
        <link rel="stylesheet" href="css/styles.css">

        <!-- Resources -->
        <link rel="stylesheet" href="Skeleton-2.0.4/css/normalize.css">
        <link rel="stylesheet" href="Skeleton-2.0.4/css/skeleton.css">

        <!-- Jquery -->
        <link href="bower_components/jquery/dist/jquery.min.js">

        <!-- Javascript -->
        <script src="js/sayThis.js"></script>
    </head>
    <body>
        <header>
            <div class="header">
                <h1>NickChat</h1>
                Sometimes you need to talk to Nick but he's away! Fortunately he uploaded his brain to a computer so you can talk to him whenever!
            </div>
        </header>

            <hr><!-- Horizontal Split -->

        <main>
            <div class="content">
                <!-- Older Messages -->
                <div class="log" id="log">
                    <table id="logTable">
                        <!-- Dynamically added -->
                    </table>
                </div>

                <!-- Form -->
                <div class="form">
                    <div class="row">
                        <div class="nine columns">
                            <textarea class="u-full-width" placeholder="Hello!" id="messageBox"></textarea>
                        </div>
                        <div class="three columns">
                            <button class="button-primary" onclick="sayThis()">Say This</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </body>
</html>