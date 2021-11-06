import React, {useState} from "react"
import {Button, Select} from "antd"
import {useDispatch, useSelector} from "react-redux"

//components
import {handleRedirect} from "../../components/handleBack"
import Header from "../../components/Header/Header"
import {postComplete} from "../../redux/actions/application"
import {BRANCH_CODE} from "../../redux/types"
import {lang, translate} from "../../LanguageContext"

//images
import checked from "../../icons/iconCheck.png"
import check from "../../icons/checkDisable.png"

import "./card.scss"

const Card = () => {

    const [loading, setLoading] = useState(false)
    const [disable, setDisable] = useState(true)
    const [IdBranch, setIdBranch] = useState(null)


    const product = useSelector(state => state.product.product.filter(item => item.status === true)[0])
    const branches = useSelector(state => state.branch.branches.filter(item => item.active === true))
    const branch = useSelector(state => state.branch.branches.filter(item => item.active === true)[0])
    const {id} = useSelector((state) => state.application)
    const dispatch = useDispatch()

    const {Option} = Select;
    const handleCheck = () => {
        setLoading(true)
        const params = {
            branch_code: String(IdBranch),
            application_id: id,
            product_item_id: product.id
        }
        dispatch({
            type: BRANCH_CODE,
            payload: IdBranch
        })
        dispatch(postComplete(params))
    }

    return (
        <div className="main_style card_main">
            {
                (product && branches && branch)&&
                <>
                    <Header title={`${translate("cardHeadTitle")} ${product.slug.charAt(0).toUpperCase() + product.slug.slice(1)}`}
                            handleClick={handleRedirect}/>
                    <div className="card_img">
                    <span>
                         <img src={product.imageURL} alt="card img"/>
                    </span>
                    </div>

                    <div className="card_col">
                        <div className="card_col_title">
                            <h1>{translate("cardTitle")}</h1>
                            <h3>{product.title[lang]}</h3>
                        </div>
                        <div className="card_col_text">
                            {product.description[lang]}
                        </div>
                    </div>

                    <div className="select_input">
                        <p style={{paddingTop: '12px', paddingLeft: '16px', marginBottom: 0}}>{translate("selectBranch")}</p>
                        <Select
                            showArrow
                            bordered={false}
                            style={{width: '100%'}}
                            defaultValue={` АКБ "Hamkorbank" ${branch.title[lang]}  ${branch.address[lang]}`}
                            onChange={(e) => {
                                setIdBranch(e)
                                setDisable(false)
                            }
                            }
                        >
                            {branches.map((branch) =>
                                <Option className="option_branch" value={branch.id}
                                        key={branch.id}>
                                    <div className="option_branch_style">
                                        <div className="branch_address">{branch.title[lang]} <br/>АКБ "Hamkorbank" {branch.address[lang]}
                                            <img className="icon_branch"
                                                 src={branch.id === IdBranch ? checked : check}
                                                 alt="icon img"/>
                                        </div>
                                    </div>

                                </Option>
                            )}
                        </Select>
                    </div>

                    <div className="navigation_btn btn_pass">
                        <Button
                            loading={loading}
                            onClick={handleCheck}
                            className="next-btn is_disable"
                            disabled={disable}
                        >
                            {translate("openCard")}
                        </Button>
                    </div>

                </>
            }
        </div>
    )
}

export default Card