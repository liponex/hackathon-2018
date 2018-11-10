import SplitDate from "./SplitDate"
import moment from "moment/moment"

export default class User {

	id
	cycleLength
	menstruationLength
	menstruatedAt
	bdate
	loading = false

	getStringCycleLength() {
		return this.cycleLength ? '' + this.cycleLength : ''
	}

	getStringMenstruationLength() {
		return this.menstruationLength ? '' + this.menstruationLength : ''
	}

	static fromRaw(raw) {
		const user = new User()
		user.id = raw.id || 0
		user.cycleLength = raw.cycle_length || 30
		user.menstruationLength = raw.menstruation_length || 5
		user.menstruatedAt = raw.menstruated_at
			? SplitDate.fromRaw(raw.menstruated_at) : SplitDate.fromRaw(moment().unix())
		user.bdate = raw.bdate
			? SplitDate.fromRaw(raw.bdate) : SplitDate.fromRaw(moment().unix())
		return user
	}

	toRaw() {
		return {
			id: this.id,
			cycle_length: this.cycleLength,
			menstruation_length: this.menstruationLength,
			menstruated_at: this.menstruatedAt.timestamp(),
			bdate: this.bdate.timestamp(),
		}
	}

	clone() {
		const user = new User()
		user.id = this.id
		user.cycleLength = this.cycleLength
		user.menstruationLength = this.menstruationLength
		user.menstruatedAt = this.menstruatedAt.clone()
		user.bdate = this.bdate.clone()
		user.loading = this.loading
		return user
	}
}
