import React, { Component } from 'react'
import InputAddress from 'react-thailand-address-autocomplete'

export default class ThailandAddressDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subdistrict: '',
      district: '',
      province: '',
      zipcode: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSelect = this.onSelect.bind(this)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSelect(fullAddress) {
    const { subdistrict, district, province, zipcode } = fullAddress
    this.setState({ subdistrict, district, province, zipcode })
  }

  render() {
    return (
      <div>
        <div className="address-form">
          <div>
            <span>แขวง / ตำบล</span>
            <InputAddress
              address="subdistrict"
              value={this.state.subdistrict}
              onChange={this.onChange}
              onSelect={this.onSelect}
            />
          </div>
          <div>
            <span>เขต / อำเภอ</span>
            <InputAddress
              address="district"
              value={this.state.district}
              onChange={this.onChange}
              onSelect={this.onSelect}
            />
          </div>
          <div>
            <span>จังหวัด</span>
            <InputAddress
              address="province"
              value={this.state.province}
              onChange={this.onChange}
              onSelect={this.onSelect}
            />
          </div>
          <div>
            <span>รหัสไปรษณีย์</span>
            <InputAddress
              address="zipcode"
              value={this.state.zipcode}
              onChange={this.onChange}
              onSelect={this.onSelect}
            />
          </div>
        </div>
        <style>{`
          .address-form {
            margin: auto;
            padding-top: 150px;
            font-size: 16px;
            width: 250px;
          }
          .address-form > div {
            display: flex;
            margin-bottom: 15px;
          }
          .address-form > div > span {
            padding: 7px 0;
            width: 120px;
          }
        `}</style>
      </div>
    )
  }
}