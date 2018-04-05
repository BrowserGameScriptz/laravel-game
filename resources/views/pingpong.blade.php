<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Ping Pong</title>
<style>
#playground{
background: #e0ffe0;
width: 400px;
height: 200px;
position: relative;
overflow: hidden;
}
#ball {
background: #fbb;
position: absolute;
width: 20px;
height: 20px;
left: 150px;
top: 100px;
border-radius: 10px;
}
.paddle {
background: #bbf;
left: 50px;
top: 70px;
position: absolute;
width: 30px;
height: 70px;
}
#paddleB {
left: 320px;
}
</style>
</head>
<body>
<header>
<h1>Ping Pong</h1>
</header>
<footer>
This is an example of creating a Ping Pong Game.
</footer>
</body>
<script src="{{ asset('vendor/switchery/dist/switchery.js') }}"></script>
<script src="{{ asset('vendor/moment/min/moment.min.js') }}"></script>
<script src="{{ asset('vendor/toastr/toastr.js') }}"></script>
<script src="{{ asset('vendor/jquery/dist/jquery.min.js') }}"></script>
<script src="{{ asset('vendor/jquery-ui/jquery-ui.min.js') }}"></script>
<script src="{{ asset('vendor/bootstrap/dist/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('vendor/pace/pace.min.js') }}"></script>
<script src="{{ asset('vendor/datatables/media/js/jquery.dataTables.js') }}"></script>
<script src="{{ asset('vendor/jquery-slimscroll/jquery.slimscroll.min.js') }}"></script>
<script src="{{ asset('vendor/widgster/widgster.js') }}"></script>
<script src="{{ asset('vendor/jquery-touchswipe/jquery.touchSwipe.js') }}"></script>
<script src="{{ asset('vendor/jquery.idle/jquery.idle.min.js') }}"></script>
<script src="{{ asset('vendor/ladda/dist/spin.min.js') }}"></script>
<script src="{{ asset('vendor/ladda/dist/ladda.min.js') }}"></script>
<script src="{{ asset('vendor/ladda/dist/ladda.jquery.min.js') }}"></script>
<script src="{{ asset('vendor/toastr/toastr.js') }}"></script>
<script src="{{ asset('vendor/sweetalert/dist/sweetalert.min.js') }}"></script>
<script src="{{ asset('vendor/bootstrap-select/dist/js/bootstrap-select.min.js') }}"></script>
<script src="{{ asset('js/app.js') }}"></script>
<script src="{{ asset('vendor/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js') }}"></script>
<script src="{{ asset('vendor/select2/select2.js') }}"></script>
<script>
$(function(){
alert("Welcome to the Ping Pong battle.");
});
</script>
</html>