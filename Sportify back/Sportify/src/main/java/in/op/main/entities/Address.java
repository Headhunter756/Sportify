package in.op.main.entities;

import jakarta.persistence.Entity;

@Entity
public class Address {

	private String flat;
	private String building;
	private String road;
	private String city;
	private String state;
	private int pincode;
	
	public Address() {}

	public String getFlat() {
		return flat;
	}

	public void setFlat(String flat) {
		this.flat = flat;
	}

	public String getBuilding() {
		return building;
	}

	public void setBuilding(String building) {
		this.building = building;
	}

	public String getRoad() {
		return road;
	}

	public void setRoad(String road) {
		this.road = road;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}
	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode= pincode;
	}	

	@Override
	public String toString() {
		String add = flat +", "+ building +", "+ road +", "+ city +", "+ state +", "+ pincode +".";
		return add;
	}
	
}
