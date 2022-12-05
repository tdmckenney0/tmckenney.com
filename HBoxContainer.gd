extends HBoxContainer


# Declare member variables here. Examples:
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	$Github.connect("pressed", self, "_onGithub")
	$LinkedIn.connect("pressed", self, "_onLinkedIn")
	$Source.connect("pressed", self, "_onSource")
	
	pass # Replace with function body.

func _onGithub():
	OS.shell_open("https://github.com/tdmckenney0")
	
func _onLinkedIn():
	OS.shell_open("https://www.linkedin.com/in/tmckenney7")
	
func _onSource():
	OS.shell_open("https://github.com/tdmckenney0/tmckenney.com")
