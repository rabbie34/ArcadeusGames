#pragma strict

var Speed : float;

function Start () {

}

function Update () {

}

function FixedUpdate ()
{
	this.transform.Translate(0,0,-Speed*Time.deltaTime);
}
