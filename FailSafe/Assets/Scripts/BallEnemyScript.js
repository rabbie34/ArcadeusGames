#pragma strict

var rollModifier = 1.0f;
var screenEdge = 1.2f;
private var tilt : Vector3 = Vector3.zero;

function Start () {
	#if UNITY_ANDROID
    buildTarget = "Android";
  	#endif
	if(Random.Range(0,2) == 0)
	{
		rigidbody.AddTorque(0,0, Random.Range(-5.0f,-2.5f));
	}
	else
	{
		rigidbody.AddTorque(0,0, Random.Range( 2.5f, 5.0f));
	}

}

function Update () {
	if (Input.GetKey(KeyCode.A))
	{
		rigidbody.AddTorque(0,0,rollModifier * Time.deltaTime*10);
	}
	if (Input.GetKey(KeyCode.D))
	{
		rigidbody.AddTorque(0,0,-rollModifier * Time.deltaTime*10);
	}
	tilt = Input.acceleration;
	rigidbody.AddTorque( 0, 0, tilt.x*(Time.deltaTime*40)*6);
}

function FixedUpdate ()
{
	if(transform.position.x> screenEdge)
	{
		transform.position = Vector3(-screenEdge,transform.position.y,0);
	}
	if(transform.position.x < -screenEdge)
	{
		transform.position = Vector3(screenEdge,transform.position.y,0);
	}
	
}

function OnCollisionEnter ( hit : Collision )
{
	if(hit.gameObject.tag == "Player")
	{
		//Debug.Log("Hit player");
	}
}