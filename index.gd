extends CanvasLayer


# Declare member variables here. Examples:
# var a = 2
# var b = "text"
const ROTATION_RATE_DEG = 0.01;

# Called when the node enters the scene tree for the first time.
func _ready():	
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	var rotate_by = ((1 + delta) * self.ROTATION_RATE_DEG * (PI / 180));
	
	$Spatial/CSGSphere.rotate_y(rotate_by)
	
